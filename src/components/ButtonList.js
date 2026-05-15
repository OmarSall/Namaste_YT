import Button from "./Button";

const list = ["All", "Gaming","Songs", "Live", "Cricket", "Cooking", "Valentines" ];

const ButtonList = ({name}) => {
    return (
        <div className="flex">
            {
                list.map((name, index) => (
                    <div key={index}>
                        <Button name={name} />
                    </div>
                ))
            }
        </div>
    )
}

export default ButtonList;
