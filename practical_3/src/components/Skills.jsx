function Skills(props) {

    return (

        <section className="skills">

            <h2>My Skills</h2>

            <ul>

                {
                    props.skills.map((skill, index) => (
                        <li key={index}>
                            {skill}
                        </li>

                    ))
                }

            </ul>

        </section>

    );
}

export default Skills;