import "./Rooms.css";

function Room() {
    return(
        <div className="App-Rooms">
            <table>
                <td>
                    <div className="Rooms">
                        Normal Rooms x4<br/>
                        Lake View Rooms x4<br/>
                        Deluxe Room<br/>
                    </div>
                </td>
                <td>
                    <div className="Rooms_Description">
                        Lorem Ipsum
                    </div>
                </td>
            </table>
        </div>
    );
}

export default Room;