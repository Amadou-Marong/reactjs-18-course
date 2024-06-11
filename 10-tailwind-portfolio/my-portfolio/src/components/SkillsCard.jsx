const SkillsCard = ({ icon, text, title }) => {
    return (
        <article>
            <span>{icon}</span>
            <h3 className="mt-6 font-bold">{title}</h3>
            <p className="mt-2 text-slate-500">{text}</p>
        </article>
    )
}
export default SkillsCard;