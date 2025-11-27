import "./styles/theme.css";
import "./styles/global.css";
import "./App.css";
import { Container } from "./components/Container";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";
import {CountDown} from "./components/CountDown";
import {PlayIcon} from "lucide-react";
import {DefaultInput} from "./components/DefaultInput";
import {Cycles} from "./components/Cycles";

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

        <Container>
            <Menu></Menu>
        </Container>

        <Container>
            <CountDown/>
        </Container>

        <Container>
            <form className='form' action="">
                <div className='formRow'>
                    <DefaultInput labelText='Task teste' id='input' type='text' placeholder='Digite algo'/>
                </div>

                <div className='formRow'>
                    <p>Lorem</p>
                </div>

                <div className='formRow'>
                    <Cycles></Cycles>
                </div>

                <div className='formRow'>
                    <button>
                        <PlayIcon/>
                    </button>
                </div>
            </form>
        </Container>
    </>
  );
}
