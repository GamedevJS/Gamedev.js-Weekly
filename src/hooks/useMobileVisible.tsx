import { useWindowSize } from "./useWindowSize";

export function useMobileVisible() {
    const burgerSize = useWindowSize();
    return burgerSize.innerWidth > 0 && burgerSize.innerWidth <= 600;
}
