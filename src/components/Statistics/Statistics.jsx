import React from "react";
const Statistics = ({title, stats}) => {
    const listItems = stats.map(item0 =>
        <li class="item">
            <span class="label">{item0.label}</span>
            <span class="percentage">{item0.percentage}</span>
        </li>
    )
    return (
            
        <section class="statistics">
            <h2 class="title">{title}</h2>
            <ul class="stat-list"> 
                {listItems}
            </ul>
        </section>
    )
}

export default Statistics;

// date props:
//     title - opțional, iar atunci când nu este trimis, nu trebuie să se randeze tag-ul <h2>.
//     stats - o matrice de obiecte care conțin informații despre date statistice. Poate avea orice număr de elemente.