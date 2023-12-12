import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import './experience.css';

export default function experience() {
    return (
        <div>
            <NavBar></NavBar>
            <table>
                <tr>
                    <th>Company</th>
                    <th>Location</th>
                    <th>Designation</th>
                    <th>Duration</th>
                    <th>Work</th>
                </tr>
                <tr>
                    <td>Jio Platforms Limited</td>
                    <td>Bangalore, Karnataka</td>
                    <td>Software Developer</td>
                    <td>July 2022-Ongoing</td>
                    <td><ul>
                        <li>Designed a PLP (Product Listing Page) Reranking solution for JioMart, prioritizing in-demand products that users are interested in viewing or purchasing, ensuring they appear prominently at the top of search results. This led to a 20% boost in sales conversion.</li>
                        <li>Expanded the PLP Reranking solution into a centralized system accessible to various e-commerce brands within Jio. Additionally, created a Cross-Platform PLP Reranking feature enabling multiple e-commerce brands to exchange reranking information within the Jio platform.</li>
                        <li>Created an Autocomplete functionality for a centralized search service, enhancing the search journey and expediting the shopping process.</li>
                    </ul></td>
                </tr>
                <tr>
                    <td>MTX IT Consulting Services Pvt. Ltd.</td>
                    <td>Hyderabad, Telangana</td>
                    <td>Software Developer</td>
                    <td>July 2021-June 2022</td>
                    <td><ul>
                        <li>Implemented MavQ Sports Performance Analytics Platform, aiding coaches in translating on-field gameplay videos, player
                            statistics, and daily practice metrics into actionable data-driven insights to enhance team performance.</li>
                        <li>Implemented Backend solution for Intelligent Document Processing that accelerates digitization of complex documents using
                            AI to process, extract and validate critical information within unstructured documents.</li>
                    </ul></td>
                </tr>
                <tr>
                    <td>IIT Bombay-Indigenous 5G Test-bed</td>
                    <td>Bombay, Maharastra</td>
                    <td>Research Assistant</td>
                    <td>July 2018- June 2021</td>
                    <td><ul>
                        <li>Designed and Implemented test-stub (TestRan) to interact with 5G core and perform user-registration, user deregistration,
                            session-setup and session-release.</li>
                        <li>Performed Registration and Session load test on 5G core with up to 500 concurrent UE threads. Responsible for maintaining
                            and monitoring servers and workstation being used in the development of indigenous 5G Test-bed.</li>
                    </ul></td>
                </tr>
            </table>
        </div>
    )
}
