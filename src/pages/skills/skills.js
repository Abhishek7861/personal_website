import React from 'react';
import NavBar from '../../components/NavBar/NavBar';

export default function skills() {
  return (
    <div>
        <NavBar></NavBar>
        <table>
  <tr>
    <th>skills</th>
    <th></th>
  </tr>
  <tr>
    <td>Coding Background</td>
    <td>Java, Python, JavaScript, C, C++</td>  </tr>
  <tr>
    <td>DataBase</td>
    <td>MySQL, PostgreSQL, Redis, MongoDB</td>
  </tr>
  <tr>
    <td>Tools</td>
    <td>Git, Docker, Kubernetes, Junit, Apache Kafka, Google PubSub</td>
  </tr>
  <tr>
    <td>Web Development (Front End)</td>
    <td>HTML, CSS, React, Bootstrap</td>
  </tr>
  <tr>
    <td>Web Development (Back End)</td>
    <td>Spring Boot, Spring JPA, Hibernate, Flask</td>
  </tr>
</table>
    </div>
  )
}
