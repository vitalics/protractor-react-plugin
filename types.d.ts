
export interface ReactComponent<Props = { [name: string]: any }, State = { [name: string]: any }, Node extends (HTMLElement | Text) = HTMLElement> {
    /**
     * name of the root component or selector
     *
     * @type {string}
     * @memberof ReactComponent
     */
    readonly name: Node extends Text ? null : string;
    readonly node: null | Node extends Text ? null : Node;
    readonly isFragment: boolean;
    readonly state?: Node extends Text ? undefined : State;
    readonly props: Props;

    readonly children: Array<ReactComponent<Node extends HTMLElement ? string : { [name: string]: any }, { [name: string]: any }, Node extends HTMLElement ? Text : Node>>;
}

interface ProtractorBrowser {
    findReactElement<Props = {}, State = {}, Node extends (HTMLElement | Text) = HTMLElement>(selector: string): ReactComponent<Props, State, Node>
    findReactElements<Props = {}, State = {}, Node extends (HTMLElement | Text) = HTMLElement>(selector: string): ReactComponent<Props, State, Node>[];
}

export declare const browser: ProtractorBrowser;