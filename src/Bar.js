import "./Bar.css";

function Bar() {
    return(
        <div className="App-Bar">
            <table>
                <td>
                    <div className="Bar_Description">
                        Lorem Ipsum
                    </div>
                </td>
                <td>
                    <div className="Bar">
                        Beer<br/>
                        Hard Drinks<br/>
                        Cocktails<br/>
                    </div>
                </td>
            </table>
        </div>
    );
}

export default Bar;