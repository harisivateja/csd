# 5-Minute Presentation Script
## Centralized Student Dashboard
### Group 20 - QuadraMind

**Total Time:** 5 minutes (300 seconds)  
**Speakers:** 5 team members  
**Time per speaker:** ~60 seconds  
**Format:** Professional, conversational, data-driven

---

## 🎬 Introduction & Problem Statement (Speaker 1 - 60 seconds)

**[Slide: Home page - index.html]**

**Speaker:** Shashank Manchikatla

**Script:**

> "Good morning/afternoon everyone. We are Group 20, QuadraMind, and today we're presenting our Centralized Student Dashboard—a solution designed to transform how Horizon State University supports student success.
>
> [Click to problem.html]
>
> HSU faced a critical challenge: **below-average student retention** caused by fragmented data systems. Academic, financial, housing, and engagement data existed in silos across different departments. Advisors spent **15-20 minutes per student** manually querying multiple systems, making early intervention nearly impossible.
>
> This reactive approach meant problems were only addressed after students were already failing—after academic probation, after payment defaults, after it was often too late. Different departments used inconsistent criteria for identifying at-risk students, and there was no unified strategy for allocating limited support resources.
>
> Our team asked: **How can we break down these data silos to enable proactive, rather than reactive, student support?**"

**Key Points:**
- Introduce team and project
- State the core problem: data silos → reactive advising
- Emphasize time waste (15-20 min per student)
- Set up the "why" for the solution

---

## 💡 Solution Overview & Key Features (Speaker 2 - 60 seconds)

**[Slide: solution.html]**

**Speaker:** Hari Siva Sai Teja Mogali

**Script:**

> "Our solution is the Centralized Student Dashboard—a web application that unifies all student data into one actionable platform.
>
> We built this on a modern technology stack: **React for the frontend, FastAPI for the backend, and MongoDB for flexible data storage**. This architecture handles our prototype dataset of **1,000 students** with room to scale to 10,000 or more.
>
> [Scroll to Core Capabilities]
>
> The dashboard delivers three transformative capabilities:
>
> **First, Unified Data Integration**—we consolidate six different data sources: Students, Financials, Housing, Enrollments, Courses, and Advisor Alerts. Everything in one place.
>
> **Second, Predictive Risk Assessment**—our algorithm uses a weighted model: 40% GPA, 30% Attendance, 20% Engagement, and 10% Financial status. This multi-factor approach identified **291 at-risk students**, or 29.1% of our population.
>
> **Third, Advisor Decision Support**—we provide three key interfaces: a Dashboard View for institutional KPIs, a Pulse Tracker for prioritizing caseloads, and a Student 360° Profile for comprehensive case management.
>
> [Scroll to features]
>
> The result? **40% faster data retrieval** compared to manual queries—that's 6-8 minutes saved per student lookup."

**Key Points:**
- Introduce tech stack (React/FastAPI/MongoDB)
- Explain 3 core capabilities clearly
- Highlight multi-factor risk model (40/30/20/10)
- State key metric: 291 at-risk students, 40% faster retrieval

---

## 📊 Data Design & Architecture (Speaker 3 - 60 seconds)

**[Slide: data.html → architecture.html]**

**Speaker:** Manindra Porandla

**Script:**

> "Let me explain the technical foundation that makes this possible.
>
> [Show data.html]
>
> Since we couldn't access real student data for this prototype, we created a **synthetic dataset of 1,000 student records** using Python's pandas and faker libraries. But this wasn't random data—we embedded realistic correlations to validate our risk model.
>
> All six data entities are normalized to **Third Normal Form**, with Student_ID as the primary linking key. This ensures referential integrity and efficient queries. For example, when an advisor opens a Student 360° Profile, we reconstruct all relevant data with a single aggregated query.
>
> [Click to architecture.html]
>
> Our architecture follows a clean **three-tier design**:
>
> **The Presentation Layer**—React handles the user interface with Chart.js for visualizations.  
> **The Application Layer**—FastAPI provides async endpoints and executes our risk assessment algorithm.  
> **The Data Layer**—MongoDB stores our six collections with flexible schema design.
>
> This separation of concerns makes the system maintainable and scalable. The async/await pattern in FastAPI ensures non-blocking operations, critical when multiple advisors are querying the system simultaneously.
>
> Our design decision to pivot from Django and PostgreSQL to this modern stack gave us superior performance and a more portfolio-ready product."

**Key Points:**
- Explain synthetic data approach (1,000 students, 6 entities)
- Emphasize referential integrity and normalization (3NF)
- Walk through 3-tier architecture clearly
- Mention scalability and async benefits

---

## 📈 Dashboard Demo & Insights (Speaker 4 - 90 seconds)

**[Slide: dashboard.html → Open live dashboard in new tab]**

**Speaker:** Manohar Naidu Talari

**Script:**

> "Now let's look at the dashboard in action.
>
> [Show dashboard.html, click to open live dashboard]
>
> Here's the live application. The first thing advisors see are the **Key Performance Indicators**: 1,000 total students, a **70.9% retention rate** with a target of 85%, an average GPA of 2.77, and those **291 at-risk students** we've identified.
>
> [Scroll through dashboard]
>
> The dashboard reveals some critical insights. First, our **Department Performance comparison** shows that Psychology has the lowest average GPA compared to Engineering. This immediately flags where the university should allocate additional academic support resources.
>
> Second, the data validates our multi-factor approach. **75% of students with Critical risk scores** show both academic struggles—GPA below 2.5—AND financial stress—outstanding balances above $15,000. This proves that academic and financial issues are interconnected and require coordinated intervention.
>
> [Point to features]
>
> The **Pulse Tracker** lets advisors sort and filter students by risk level, department, or year. They can prioritize their caseload, focusing first on the students who need help most urgently.
>
> The **Student 360° Profile** is where the magic happens—unified academic records, financial status, engagement metrics, and the calculated risk score, all in one view. Advisors can add persistent notes, document interventions, and track progress over time.
>
> This shifts the advising model from putting out fires to **preventing them**. Instead of reacting to failing grades, advisors can reach out proactively with targeted support—tutoring for academic issues, financial aid counseling for payment problems, or engagement programs for students who are disengaging socially."

**Key Points:**
- Walk through live dashboard visually
- Highlight KPIs: 70.9% retention, 291 at-risk
- Explain key insights (Psychology dept, 75% correlation)
- Demonstrate Pulse Tracker and 360° Profile concepts
- Emphasize shift from reactive to proactive

---

## 🎯 Ethics, Lessons & Next Steps (Speaker 5 - 60 seconds)

**[Slide: ethics.html → lessons.html]**

**Speaker:** Sandeep Thota

**Script:**

> "Before we conclude, let's address the ethical responsibilities of this system and what we learned.
>
> [Show ethics.html]
>
> Predictive analytics on student data carries significant ethical weight. We designed with **FERPA compliance** as a foundation—role-based access controls, data minimization, and audit trails for all access.
>
> Critically, **students never see their own risk scores**. The algorithm is a tool to prompt supportive intervention, not to label or stigmatize. We require regular audits to ensure the model doesn't disproportionately flag students from marginalized populations. Our high weighting of GPA and attendance, for example, could disadvantage students with disabilities or family responsibilities—that's why human judgment must always complement the algorithm.
>
> [Click to lessons.html]
>
> Building this taught us three key lessons:
>
> **First, data integration is time-intensive**—we spent 30-40% of our project time on data quality, and that investment paid off.
>
> **Second, prioritize value over features**—we focused on the MVP: risk identification and unified profiles. Advanced features like automated alerts can come in phase two.
>
> **Third, technology choices matter**—pivoting to the React/FastAPI/MongoDB stack introduced a learning curve but delivered a more impressive, scalable product.
>
> [Return to index.html or keep on lessons.html]
>
> Looking forward, the next steps include pilot testing with real advisors, integration with live student information systems, and longitudinal tracking to validate that our interventions actually improve retention.
>
> Thank you. We're happy to take questions."

**Key Points:**
- Address ethical considerations (FERPA, no student disclosure, bias audits)
- Share 3 key lessons learned
- Outline next steps for real-world deployment
- Professional close with Q&A invitation

---

## 🎤 Smooth Handoffs Between Speakers

### Speaker 1 → Speaker 2
> "So how did we solve this problem? [Name] will walk you through our solution."

### Speaker 2 → Speaker 3
> "Now that you've seen what the dashboard does, [Name] will explain the technical architecture that powers it."

### Speaker 3 → Speaker 4
> "With that foundation in place, [Name] will show you the dashboard in action and the insights it reveals."

### Speaker 4 → Speaker 5
> "These results are promising, but [Name] will discuss the critical ethical considerations and lessons we learned."

---

## 📋 Presentation Checklist

### Before Presentation:
- [ ] All 5 speakers have practiced their sections individually
- [ ] Full team run-through completed at least twice
- [ ] Timing verified (ideally 4:30-4:45 to allow buffer)
- [ ] Website is loaded and tested on presentation computer
- [ ] Live dashboard link is working (https://harisivasaiteja.github.io/Studentdashboard/)
- [ ] Backup plan if internet fails (screenshots or PDF)
- [ ] Transitions between speakers are smooth
- [ ] All speakers know who speaks before/after them

### During Presentation:
- [ ] Speaker 1 introduces team and sets context
- [ ] Each speaker stays within 60-second window
- [ ] Visual aids (website pages) match verbal content
- [ ] Key metrics are emphasized: 291 at-risk, 70.9% retention, 40% faster
- [ ] Live dashboard demo is brief but impactful
- [ ] Ethical considerations are addressed seriously
- [ ] Conclusion invites questions professionally

### Q&A Preparation:

**Likely Questions:**

**Q: How accurate is your risk assessment model?**  
A: Our synthetic data showed 75% of critical-risk students had combined academic/financial issues, validating the multi-factor approach. Real-world accuracy would require pilot testing and continuous refinement based on actual retention outcomes.

**Q: What about student privacy?**  
A: FERPA compliance is foundational. Role-based access controls ensure only authorized advisors see relevant data. Students don't see their risk scores. All access is logged. For external reporting, data is de-identified and aggregated.

**Q: Why MongoDB instead of a relational database?**  
A: MongoDB's flexible schema accommodates the heterogeneous nature of student data without rigid constraints. It also scales horizontally more easily. For our use case—frequent reads of unified student profiles—document storage with aggregation pipelines is highly efficient.

**Q: How would you integrate this with existing student information systems?**  
A: We'd use API connectors to pull data from Banner, PeopleSoft, or other SIS platforms. ETL pipelines would run nightly or in real-time depending on data freshness requirements. Student_ID would remain the primary key linking all sources.

**Q: What was the biggest challenge?**  
A: Data integration and ensuring referential integrity in our synthetic dataset. It's easy to generate random data; it's much harder to create data that reflects realistic correlations and maintains logical coherence across 6 entities.

**Q: How much would this cost to implement?**  
A: For a university our size (15,000 students), cloud hosting (MongoDB Atlas, Render/Heroku) would run ~$200-500/month. Development cost depends on internal vs. external resources. Our estimate for full production deployment: $50K-$100K including pilot testing, training, and first-year support.

---

## 🎯 Key Metrics to Memorize

- **1,000 students** in prototype dataset
- **291 at-risk students** identified (29.1%)
- **70.9% current retention rate** → 85% target
- **40% faster** data retrieval vs. manual queries
- **15-20 minutes** previously spent per student lookup
- **6 data entities** unified: Students, Financials, Housing, Enrollments, Courses, Advisors/Alerts
- **40/30/20/10** risk algorithm weights (GPA/Attendance/Engagement/Financial)
- **75%** of critical-risk students had combined academic + financial issues
- **3-tier architecture**: React, FastAPI, MongoDB

---

## 🎬 Closing Strong

**Final Statement (Speaker 5):**

> "The Centralized Student Dashboard demonstrates that with thoughtful design, modern technology, and a commitment to ethical implementation, we can transform student advising from reactive crisis management to proactive support. By unifying data, applying evidence-based risk assessment, and empowering advisors with actionable insights, we can help more students succeed.
>
> Thank you for your time. We welcome your questions."

---

## 📊 Visual Flow Guide

**Slide Progression:**
1. **index.html** (Home) - Introduction, team
2. **problem.html** (Problem) - Data silos, pain points
3. **solution.html** (Solution) - Core capabilities, features
4. **data.html** (Data) - Synthetic dataset, entities
5. **architecture.html** (Architecture) - 3-tier design
6. **dashboard.html** (Dashboard) - Live demo, insights
7. **ethics.html** (Ethics) - Ethical considerations
8. **lessons.html** (Lessons) - Key takeaways, next steps
9. **index.html** or **appendix.html** (Conclusion) - Thank you, Q&A

---

**Total Presentation Time:** ~5 minutes  
**Q&A Time:** 2-3 minutes  
**Total Session:** 7-8 minutes  

**Good luck, Team QuadraMind! 🚀**