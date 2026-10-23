"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

type QuoteField = "name" | "email" | "phone" | "propertyType" | "service" | "location" | "description";
type QuoteValues = Record<QuoteField, string>;
type FieldErrors = Partial<Record<QuoteField, string>>;

const initialValues: QuoteValues = {
  name: "",
  email: "",
  phone: "",
  propertyType: "",
  service: "",
  location: "",
  description: "",
};

const services = [
  "Interior painting",
  "Exterior painting",
  "Residential painting",
  "Commercial painting",
  "Roof painting",
  "Epoxy flooring",
  "Driveway painting",
  "Surface preparation and repainting",
  "Professional finishing and protective coatings",
  "Not sure yet",
];

function validate(values: QuoteValues): FieldErrors {
  const errors: FieldErrors = {};
  if (values.name.trim().length < 2) errors.name = "Please enter your full name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) errors.email = "Enter a valid email address.";
  if (values.phone.replace(/\D/g, "").length < 8) errors.phone = "Enter a phone number with at least 8 digits.";
  if (!values.propertyType) errors.propertyType = "Choose a property type.";
  if (!values.service) errors.service = "Choose a service or select “Not sure yet”.";
  if (values.location.trim().length < 2) errors.location = "Add a suburb, town or property area.";
  if (values.description.trim().length < 12) errors.description = "Please add a little more detail (at least 12 characters).";
  return errors;
}

export default function QuoteForm() {
  const [values, setValues] = useState<QuoteValues>(initialValues);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [attempted, setAttempted] = useState(false);
  const [submittedLocally, setSubmittedLocally] = useState(false);

  const update = (field: QuoteField, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    if (attempted) {
      const nextErrors = validate({ ...values, [field]: value });
      setErrors(nextErrors);
    }
    setSubmittedLocally(false);
  };

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setAttempted(true);
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      const firstInvalid = Object.keys(nextErrors)[0] as QuoteField;
      window.requestAnimationFrame(() => document.getElementById(`quote-${firstInvalid}`)?.focus());
      return;
    }
    setSubmittedLocally(true);
  };

  const errorFor = (field: QuoteField) => errors[field];
  const describedBy = (field: QuoteField) => errors[field] ? `quote-${field}-error` : undefined;

  return (
    <form className="quote-form" onSubmit={submit} noValidate aria-labelledby="quote-form-heading">
      <h3 className="form-heading" id="quote-form-heading">A few details to get started</h3>
      <p className="form-intro">All fields are required. This prototype keeps your entry in this page only.</p>
      {attempted && Object.keys(errors).length > 0 && <p className="form-alert" role="alert">Please review the fields highlighted below before continuing.</p>}

      <div className="form-grid">
        <div className="form-field">
          <label htmlFor="quote-name">Full name <span aria-hidden="true">*</span></label>
          <input id="quote-name" name="name" autoComplete="name" value={values.name} onChange={(event) => update("name", event.target.value)} placeholder="Your name" aria-invalid={Boolean(errorFor("name"))} aria-describedby={describedBy("name")} />
          {errorFor("name") && <p id="quote-name-error" className="field-error">{errorFor("name")}</p>}
        </div>
        <div className="form-field">
          <label htmlFor="quote-email">Email address <span aria-hidden="true">*</span></label>
          <input id="quote-email" name="email" type="email" autoComplete="email" value={values.email} onChange={(event) => update("email", event.target.value)} placeholder="you@example.com" aria-invalid={Boolean(errorFor("email"))} aria-describedby={describedBy("email")} />
          {errorFor("email") && <p id="quote-email-error" className="field-error">{errorFor("email")}</p>}
        </div>
        <div className="form-field">
          <label htmlFor="quote-phone">Phone number <span aria-hidden="true">*</span></label>
          <input id="quote-phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" value={values.phone} onChange={(event) => update("phone", event.target.value)} placeholder="Your best contact number" aria-invalid={Boolean(errorFor("phone"))} aria-describedby={describedBy("phone")} />
          {errorFor("phone") && <p id="quote-phone-error" className="field-error">{errorFor("phone")}</p>}
        </div>
        <div className="form-field">
          <label htmlFor="quote-propertyType">Property type <span aria-hidden="true">*</span></label>
          <select id="quote-propertyType" name="propertyType" autoComplete="off" value={values.propertyType} onChange={(event) => update("propertyType", event.target.value)} aria-invalid={Boolean(errorFor("propertyType"))} aria-describedby={describedBy("propertyType")}>
            <option value="">Select property type</option><option>House</option><option>Unit or apartment</option><option>Commercial property</option><option>Other property</option>
          </select>
          {errorFor("propertyType") && <p id="quote-propertyType-error" className="field-error">{errorFor("propertyType")}</p>}
        </div>
        <div className="form-field">
          <label htmlFor="quote-service">Painting service required <span aria-hidden="true">*</span></label>
          <select id="quote-service" name="service" value={values.service} onChange={(event) => update("service", event.target.value)} aria-invalid={Boolean(errorFor("service"))} aria-describedby={describedBy("service")}>
            <option value="">Choose a service</option>{services.map((service) => <option key={service}>{service}</option>)}
          </select>
          {errorFor("service") && <p id="quote-service-error" className="field-error">{errorFor("service")}</p>}
        </div>
        <div className="form-field">
          <label htmlFor="quote-location">Property location <span aria-hidden="true">*</span></label>
          <input id="quote-location" name="location" autoComplete="address-level2" value={values.location} onChange={(event) => update("location", event.target.value)} placeholder="Suburb or town" aria-invalid={Boolean(errorFor("location"))} aria-describedby={describedBy("location")} />
          {errorFor("location") && <p id="quote-location-error" className="field-error">{errorFor("location")}</p>}
        </div>
        <div className="form-field form-field--full">
          <label htmlFor="quote-description">Project description <span aria-hidden="true">*</span></label>
          <textarea id="quote-description" name="description" value={values.description} onChange={(event) => update("description", event.target.value)} placeholder="What would you like painted? Add a few details about the space and the finish you have in mind." aria-invalid={Boolean(errorFor("description"))} aria-describedby={describedBy("description")} />
          {errorFor("description") && <p id="quote-description-error" className="field-error">{errorFor("description")}</p>}
        </div>
      </div>

      <div className="form-submit-row">
        <button className="button button-light form-submit" type="submit">Request a free quote <ArrowUpRight size={15} aria-hidden="true" /></button>
        <p className="form-privacy-note">Frontend preview only. Nothing is sent, stored or submitted to a business.</p>
      </div>
      {submittedLocally && (
        <p className="form-success" role="status" aria-live="polite">
          <CheckCircle2 size={20} aria-hidden="true" />
          <span><strong>Thanks for checking the form.</strong> Your details have not been sent or stored. This preview has no submission connection; please don’t include private or sensitive information.</span>
        </p>
      )}
    </form>
  );
}
