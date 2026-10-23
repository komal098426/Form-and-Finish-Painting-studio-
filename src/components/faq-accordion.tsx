"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

const questions = [
  {
    question: "What kinds of painting work can I ask about?",
    answer: "The service list on this concept site includes residential and commercial painting, interior and exterior work, roofs, driveways, epoxy flooring, surface preparation and protective coatings. Exact availability and suitability should be confirmed for the property.",
  },
  {
    question: "How should I prepare a property before painting?",
    answer: "Preparation depends on the rooms, surfaces and scope. Before an assessment, it can help to mention peeling or damaged areas, access requirements, furniture or equipment that needs moving and any timing constraints. The proposed preparation plan should be agreed before work starts.",
  },
  {
    question: "How long does a painting project take?",
    answer: "Timing depends on the size and condition of the area, preparation, access and drying requirements. A property assessment is the right point to discuss the scope and an indicative schedule; this preview cannot promise a project duration.",
  },
  {
    question: "Can I request a free quote?",
    answer: "The website is designed around a free-quote enquiry. Confirm the offer and quote process with the business before launch. This preview form is not connected to a business inbox and will not send your details.",
  },
  {
    question: "What paint or coating is right for my surface?",
    answer: "The selection depends on the substrate, the area’s exposure and how the surface will be used. Roof, driveway and epoxy systems each have different requirements, so product suitability should be discussed after the surface and project scope are understood.",
  },
  {
    question: "How do I arrange an assessment?",
    answer: "Use the quote-enquiry form to describe the property, location and work you are considering. It is currently a visual prototype only; it does not send or store an enquiry. Business contact details and an active submission method need to be added before launch.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="faq-list" data-reveal-group>
      {questions.map((item, index) => {
        const open = openIndex === index;
        const answerId = `faq-answer-${index + 1}`;
        return (
          <article className="faq-item" key={item.question}>
            <h3 className="faq-heading">
              <button className="faq-trigger" type="button" id={`faq-question-${index + 1}`} aria-expanded={open} aria-controls={answerId} onClick={() => setOpenIndex(open ? null : index)}>
                <span className="faq-number">{String(index + 1).padStart(2, "0")}</span>
                <span className="faq-question">{item.question}</span>
                <span className="faq-plus" aria-hidden="true"><Plus size={15} /></span>
              </button>
            </h3>
            <div className={`faq-panel${open ? " is-open" : ""}`} id={answerId} role="region" aria-labelledby={`faq-question-${index + 1}`} aria-hidden={!open}>
              <div className="faq-panel-inner"><p className="faq-answer">{item.answer}</p></div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
