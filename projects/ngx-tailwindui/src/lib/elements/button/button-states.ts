import { Button } from "./button";
import { State } from "../../core/shared/abstractions/state";

export abstract class ButtonState extends State {
    protected button: Button;

    constructor (btn: Button) {
        super();
        this.button = btn;
    }
}

export class EnabledButton extends ButtonState {

    override enable(): void {

    }
    override disable(): void {

    }
    override hover(): void {

    }
    override focus(): void {

    }
    override click(): void {

    }


}

export class DisabledButton extends ButtonState {

    override enable(): void {

    }
    override disable(): void {

    }
    override hover(): void {

    }
    override focus(): void {

    }
    override click(): void {

    }

}

export class HoveredButton extends ButtonState {

    override enable(): void {

    }
    override disable(): void {

    }
    override hover(): void {

    }
    override focus(): void {

    }
    override click(): void {

    }

}

export class FocusedButton extends ButtonState {

    override enable(): void {

    }
    override disable(): void {

    }
    override hover(): void {

    }
    override focus(): void {

    }
    override click(): void {

    }

}

export class ClickedButton extends ButtonState {

    override enable(): void {

    }
    override disable(): void {

    }
    override hover(): void {

    }
    override focus(): void {

    }
    override click(): void {

    }

}
