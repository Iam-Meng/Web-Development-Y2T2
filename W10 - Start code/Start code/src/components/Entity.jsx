
function Entity({ enName, perHP }) {
    return (<>
        <section className="container">
            <h2>{enName}</h2>
            <div className="healthbar">
                <div style={{ width: `${perHP}%` }} className="healthbar__value"></div>
            </div>
        </section>
    </>);
}

export default Entity;
