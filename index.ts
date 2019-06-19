import { browser } from 'protractor';
import { resq$, resq$$ } from 'resq';
export async function setup() {
    browser.findReactElement = resq$;
    browser.findReactElements = resq$$;
}

