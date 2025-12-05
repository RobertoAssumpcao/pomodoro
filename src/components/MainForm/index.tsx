import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";

export function MainForm() {
  return (
    <form className="form" action="">
      <div className="formRow">
        <DefaultInput
          labelText="Task teste"
          id="input"
          type="text"
          placeholder="Digite algo"
        />
      </div>

      <div className="formRow">
        <p>Lorem</p>
      </div>

      <div className="formRow">
        <Cycles></Cycles>
      </div>

      <div className="formRow">
        <DefaultButton icon={<PlayCircleIcon />}></DefaultButton>
      </div>
    </form>
  );
}
