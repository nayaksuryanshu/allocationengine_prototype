import React from 'react';

// Using constants for styling to keep the JSX clean
const styles = {
    container: {
        padding: '2rem 1.5rem',
        maxWidth: '900px',
        margin: '2rem auto',
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        lineHeight: '1.7',
        color: '#333',
    },
    header: {
        textAlign: 'center',
        borderBottom: '1px solid #eee',
        paddingBottom: '1.5rem',
        marginBottom: '2rem',
    },
    h1: {
        fontSize: '2.5rem',
        color: '#1a237e',
        fontWeight: 'bold',
        margin: '0 0 0.5rem 0',
    },
    h2: {
        fontSize: '1.8rem',
        color: '#283593',
        marginTop: '2.5rem',
        marginBottom: '1rem',
        borderBottom: '2px solid #3f51b5',
        paddingBottom: '0.5rem',
    },
    h3: {
        fontSize: '1.3rem',
        color: '#3f51b5',
        marginTop: '1.5rem',
        fontWeight: '600',
    },
    paragraph: {
        fontSize: '1rem',
        color: '#555',
        marginBottom: '1rem',
    },
    section: {
        marginBottom: '2rem',
    },
    featureList: {
        listStyleType: 'none',
        paddingLeft: '0',
    },
    featureItem: {
        backgroundColor: '#f8f9fa',
        borderLeft: '4px solid #3f51b5',
        padding: '1rem 1.5rem',
        marginBottom: '1rem',
        borderRadius: '0 8px 8px 0',
    },
    kpiContainer: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '1rem',
        textAlign: 'center',
    },
    kpiBox: {
        backgroundColor: '#e8eaf6',
        padding: '1.5rem',
        borderRadius: '8px',
    },
    kpiValue: {
        fontSize: '2rem',
        fontWeight: 'bold',
        color: '#1a237e',
    },
    kpiLabel: {
        fontSize: '0.9rem',
        color: '#5c6bc0',
        marginTop: '0.5rem',
    },
    teamSection: {
        backgroundColor: '#f1f3f5',
        padding: '2rem',
        borderRadius: '8px',
        border: '1px solid #dee2e6',
    },
};

const About = () => (
    <div style={styles.container}>
        <header style={styles.header}>
            <h1 style={styles.h1}>About SkillSync AI</h1>
            <p style={{ ...styles.paragraph, fontSize: '1.2rem', color: '#555' }}>
                Powering the Prime Minister’s Internship Scheme with an Intelligent Allocation Engine
            </p>
        </header>

        <section style={styles.section}>
            <h2 style={styles.h2}>The National Challenge: SIH25033</h2>
            <p style={styles.paragraph}>
                The **Prime Minister’s Internship Scheme** is a transformative national program connecting millions of students with invaluable opportunities across government, public, and private sectors. However, its scale presents a significant challenge: the allocation process is often manual, slow, and inefficient. This leads to **suboptimal matches**, where students are placed in irrelevant roles, and high **dropout rates**, wasting valuable seats. Organizations also suffer from skill gaps in their interns. Our project directly addresses the official problem statement **SIH25033** by building a robust solution to this critical issue.
            </p>
        </section>

        <section style={styles.section}>
            <h2 style={styles.h2}>Our Solution: The AI-Powered Smart Allocation Engine</h2>
            <p style={styles.paragraph}>
                SkillSync AI is a sophisticated platform that automates and optimizes the entire internship lifecycle. By leveraging **Artificial Intelligence** and **Machine Learning**, we ensure that every match is fair, transparent, and perfectly aligned with the needs of both students and organizations. Our engine analyzes deep profiles to connect the right talent with the right opportunity, transforming a complex logistical problem into a seamless, data-driven process.
            </p>
        </section>

        <section style={styles.section}>
            <h2 style={styles.h2}>Core Features</h2>
            <div style={styles.featureItem}>
                <h3 style={styles.h3}>Intelligent Matching Algorithm</h3>
                <p style={styles.paragraph}>
                    At our core is a powerful matching algorithm. We use **Natural Language Processing (NLP)** to parse student resumes and internship descriptions, and ML ranking models to score each potential match based on skills, academic background, career goals, and project experience. A crucial **fairness layer** is built-in to ensure equitable opportunities for students from all backgrounds, including smaller colleges and rural areas.
                </p>
            </div>
            <div style={styles.featureItem}>
                <h3 style={styles.h3}>Predictive Dropout Analysis</h3>
                <p style={styles.paragraph}>
                    A significant number of allocated internships are never joined. Our AI model analyzes historical data to predict the likelihood of a student dropping out based on factors like skill mismatch, location, or engagement history. This allows us to proactively re-adjust allocations, drastically **reducing seat wastage** and maximizing the scheme's impact.
                </p>
            </div>
            <div style={styles.featureItem}>
                <h3 style={styles.h3}>Transparent Administrative Dashboard</h3>
                <p style={styles.paragraph}>
                    We provide a comprehensive dashboard for administrators and government bodies. This interface offers real-time insights into key metrics like allocation success rates, dropout prediction accuracy, and fairness distribution across regions. With powerful filters and visualizations, stakeholders can monitor the program's health and make informed, data-driven decisions.
                </p>
            </div>
        </section>

        <section style={styles.section}>
            <h2 style={styles.h2}>Beyond Allocation: Innovative Enhancements</h2>
            <p style={styles.paragraph}>
                We believe in creating a holistic ecosystem for student growth. Our platform includes value-added features that set it apart:
            </p>
            <ul style={styles.featureList}>
                <li><strong>AI Career Guidance Chatbot:</strong> Post-allocation, students can interact with a chatbot to understand how their internship aligns with their career path and receive personalized resources for skill development.</li>
                <li><strong>Remote & Freelance Opportunities:</strong> We integrate verified remote work and freelancing projects, extending opportunities to students in tier-2 and tier-3 cities who may lack access to physical internships.</li>
            </ul>
        </section>

        <section style={styles.section}>
            <h2 style={styles.h2}>Our Mission & Measurable Impact</h2>
            <p style={styles.paragraph}>
                Our mission is to build a national talent engine that empowers students and strengthens organizations. We are committed to delivering tangible results, measured by the following Key Performance Indicators (KPIs):
            </p>
            <div style={styles.kpiContainer}>
                <div style={styles.kpiBox}>
                    <div style={styles.kpiValue}>+25%</div>
                    <div style={styles.kpiLabel}>Improvement in Allocation Accuracy</div>
                </div>
                <div style={styles.kpiBox}>
                    <div style={styles.kpiValue}>&lt;15%</div>
                    <div style={styles.kpiLabel}>Target Dropout Rate (from 30%)</div>
                </div>
                <div style={styles.kpiBox}>
                    <div style={styles.kpiValue}>-80%</div>
                    <div style={styles.kpiLabel}>Reduction in Manual Allocation Time</div>
                </div>
            </div>
        </section>

        <section style={styles.teamSection}>
            <h2 style={styles.h2}>The Team Behind SkillSync AI</h2>
            <p style={styles.paragraph}>
                Our project is driven by a multidisciplinary team with clearly defined roles across AI/ML development, backend engineering, frontend design, and DevOps. This structured approach ensures that every module—from the NLP parser to the final dashboard—is built with expertise and precision, making our vision both feasible and impactful.
            </p>
        </section>
    </div>
);

export default About;