const TemplateExpressions = () => {

    const name = "Juliana Santos";
    const data = {
        age: 41,
        job:'Programadora Junior'
    }

    return (
    <>
        <h1 className="mytemp">Template Expressions</h1>
        <h2> Olá {name}, tudo bem?</h2>
        <p> Idade: {data.age}</p>
        <p> Profissão: {data.job}</p>
        <br />
        <p>{10+10}</p>
        <p>{console.log('Olá Mundo!')}</p>
        <hr />
    </>
        );
 }
 export default TemplateExpressions;