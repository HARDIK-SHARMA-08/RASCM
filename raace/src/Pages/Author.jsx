import React from "react";
import Footer from "../components/Footer";
import Navigation from "../components/NavBar";
import "../assets/css/author.css";

export const Author = (props) => {
  return (
    <>
      <Navigation />
      <div className="Author">
        <h1>Instruction for Authors</h1>
        <p>
          {" "}
          International Conference on “Research Advancements in Sustainable
          Construction Materials (RASCM-2023)” is meticulously planned to muster
          innovative ideas from researchers, scientists, academicians, industry
          professionals and students. Full length papers should be submitted as
          per the template in the conference website through easy chair.
        </p>
        <h2>Manuscript Preparation and Submission Guidelines</h2>
        <p>
          {" "}
          Authors are requested to strictly follow the manuscript preparation
          guidelines prescribed in the template while preparing and submitting
          their manuscript to RASCM 2023. A single author regardless of capacity
          viz., First Author / Corresponding Author / Co-Author can submit a
          maximum of up to two articles.
        </p>
        <h2>General Guidelines and Policies</h2>
        <p>
          {" "}
          “Research Advancements in Sustainable Construction Materials
          (RASCM-2023)” invites original/review article contributions from
          different fields as mentioned in Call for Papers provided that the
          context of the work is clearly explained. Papers must be submitted on
          or before the last date of paper submission. After this deadline,
          authors will not be able to submit new papers. Once you submit your
          paper, you will be assigned a unique paper ID. Please remember this
          paper ID and quote that ID in all further communications in the
          subject line when you email us your query at rascm@skit.ac.in
        </p>
        <h2>Confidentiality</h2>
        <p>
          {" "}
          The conference committee maintains a strict confidentiality throughout
          the process from submission to decision making on every article
          considered for review. Reviewers involved in this whole review process
          are from reputed universities throughout the globe and the practice of
          keeping all information confidential during the review is part of the
          standard communication to all reviewers.
        </p>
        <h2>Review Process</h2>
        <p>
          {" "}
          Once an article is submitted to the conference the authors agree to
          our review policy where the article will be peer reviewed by
          professional reviewers after being checked for similarity index and
          plagiarism by plagiarism detection software. If any article is found
          to have more than 15 % similarity index, then it will be immediately
          rejected without any consideration.
        </p>
        <h2>Plagiarism</h2>
        <p>
          {" "}
          RASCM 2023 respects Intellectual Property Rights. Plagiarism is
          defined as the incorrect appropriation of someone else's information,
          thoughts, or ideas and presenting them as one's own. This sort of
          breach of ethical norms will not be tolerated at any cost by the
          conference. It should be noted that papers with more than 15 %
          plagiarized material will not be processed and outrightly rejected.
        </p>
        <h2>Attendance responsibilities</h2>
        <p>
          {" "}
          The authors must agree that if the paper is accepted, at least one of
          the authors will register for the conference and present the paper
          there. Acceptance of a paper does not claim for final publication.
          Only presented papers will be forwarded to publication partner.
          Presenters will be provided a certificate of paper presentation.
        </p>
        <h2>Publicity</h2>
        <p>
          {" "}
          All articles submitted to the conference cannot be fully or partially
          publicize in any kind of social media platform until unless an
          official acceptance email is received from Material Today:
          Proceedings. If any author(s) violate this act, then his/her article
          will be rejected for presentation and will also be removed from the
          proceeding for publication.
        </p>
        <h2>Publication</h2>
        <p> Will be informed</p>
      </div>
      <Footer />
    </>
  );
};
