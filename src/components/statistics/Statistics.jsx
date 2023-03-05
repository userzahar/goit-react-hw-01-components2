import data from '../../data/data.json'
export const Statistics = ({ title, stats }) => {
    return <section className="statistics"> <h2>{title}</h2> <ul className="stat-list">
        {stats.map(({ label, percentage, id }) => {
            return <li className="item" key={id}>
                <span className="label">{label}</span>
                <span className="percentage">{percentage}%</span>
            </li>
        })}
    </ul></section>
}

