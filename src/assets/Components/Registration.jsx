import React from 'react'
import "../Styles/Registration.css"

function Registration() {
    return (
        <div>
            <header><h1>Registration fee</h1></header>
            <main className='main'>
                <div className='table'>
                    <section className='col delegates'>
                        <h2>Delegates</h2>
                        <p>UG/PG students(MIT/MAHE)</p>
                        <p>Other Students/Research Scholars</p>
                        <p>Professionals from industry</p>
                        <p>Spot registration</p>
                    </section>
                    <section className="col price">
                        <h2>Indian (INR)</h2>
                        <p>&#8377;500</p>
                        <p>&#8377;1000</p>
                        <p>&#8377;3000</p>
                        <p>&#8377;1000</p>
                    </section>

                </div>
                <section className="Guidelines">
                    <h2>Guidelines for Authors</h2>
                    <ol>
                        <li>
                            Paper Format
                            <ul>
                                <li>Papers must be submitted in single-column format.</li>
                                <li>The paper should be a minimum of 4 pages in length, including the title, author details, affiliation, abstract, keywords, introduction, literature review, methodology, results and discussion, conclusion, and references.</li>
                            </ul>
                        </li>
                        <li>
                            Title
                            <ul>
                                <li>Choose a concise and descriptive title that accurately reflects the content of the paper.</li>
                            </ul>
                        </li>

                        <li>
                            Author Details:
                            <ul>
                                <li>Include the full name(s) of the author(s), their affiliation(s), and email address(es).</li>

                            </ul>
                        </li>

                        <li>
                            Abstract:
                            <ul>
                                <li>Provide a brief summary of the paper in no more than 200 words, outlining the research problem, methodology, results, and conclusions.</li>
                            </ul>
                        </li>

                        <li>
                            Keywords:
                            <ul>
                                <li>List 4 to 5 keywords that represent the main topics or themes of the paper.</li>

                            </ul>
                        </li>

                        <li>
                            Introduction:
                            <ul>
                                <li>Introduce the research topic, its significance, and the research question or objective in approximately 350 words.</li>

                            </ul>
                        </li>


                        <li>
                            Literature Review
                            <ul>
                                <li>Summarize relevant research, theories, and concepts related to the topic in approximately 200 words..</li>

                            </ul>
                        </li>


                        <li>
                            Methodology:
                            <ul>
                                <li>Describe the research design, data collection methods, and analysis techniques used in the study in approximately 500 words.</li>

                            </ul>
                        </li>

                        <li>
                            Results and Discussion:
                            <ul>
                                <li>Present the findings of the study and discuss their implications in relation to the research question or objective.</li>

                            </ul>
                        </li>

                        <li>
                            Conclusion:
                            <ul>
                                <li>Provide a brief conclusion summarizing the key findings and their implications in approximately 150 words.</li>

                            </ul>
                        </li>

                        <li>
                            Additional Guidelines:
                            <ul>
                                <li>Ensure that all submissions adhere to ethical standards and avoid plagiarism.</li>
                                <li>Follow any specific formatting or submission instructions provided by the journal or conference.</li>
                            </ul>
                        </li>





                    </ol>
                </section>

            </main>
        </div>
    )
}

export default Registration