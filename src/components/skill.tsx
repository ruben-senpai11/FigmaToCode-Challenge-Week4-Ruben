interface Props{
    skillIcon: string,
    skillLabel: string
}

function Skills ({skillIcon, skillLabel}:Props) {
  return (
    <>
      <div className="skill git">
      <div className="skill-logo">
        <img src={skillIcon} alt={skillLabel + "Logo"} />
        </div>
        <h5>{skillLabel}</h5>
      </div>
  </>
  )
}
export default Skills;