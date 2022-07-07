import { useWindowSize } from "./useWindowSize";

export function useMobileVisible() {
    const burgerSize = useWindowSize();
    return burgerSize.innerWidth <= 600;
}
