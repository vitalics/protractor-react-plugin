declare module 'resq' {
    interface ReactComponent<Props = { [name: string]: any }, State = { [name: string]: any }, Node extends (HTMLElement | Text) = HTMLElement> {
        /**
         * name of the root component or selector
         *
         * @type {string}
         * @memberof ReactComponent
         */
        readonly name: Node extends Text ? null : string;
        readonly node: null | Node extends Text ? null : Node;
        readonly isFragment: boolean;
        readonly state?: State;
        readonly props: Props;

        readonly children: Array<ReactComponent<Node extends HTMLElement ? string : { [name: string]: any }, { [name: string]: any }, Node extends HTMLElement ? Text : Node>>;

        byProps<P = Props>(props: P, extraOpts?: { exact?: boolean }): ReactComponent<P, State, Node>;
        byState<S = State>(state: S, extraOpts?: { exact?: boolean }): ReactComponent<Props, S, Node>;
    }
    export function waitToLoadReact(timeout?: number): Promise<void>;
    export function resq$<Props = {}, State = undefined, Node extends (HTMLElement | Text) = HTMLElement>(selector: string): ReactComponent<Props, State, Node>;
    export function resq$$(selector: string[]): ReactComponent[];
}