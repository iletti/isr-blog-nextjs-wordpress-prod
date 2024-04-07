import Container from "./container";

export default function Menu() {
    return (
        <Container>
            <div id="main-content" className="flex flex-col items-center justify-center space-y-4 lg:flex-row lg:space-y-0 lg:space-x-4 drop-shadow-md border-b-1 border-gray">
                <div className="flex justify-center w-full">
                    <div>
                        <ul className="p-0 menu menu-horizontal">
                            <li>
                                {/* Ensure links have meaningful text or aria-label for better SEO and accessibility */}
                                <a href="/" aria-label="Home">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <ul className="p-0 bg-transparent menu menu-horizontal">
                    <li><a href="/#palvelut">Palvelut</a></li>
<li><a href="/blogi">Blogi</a></li>
<li><a href="/tietoa">Tietoa</a></li>

                    </ul>
                </div>
            </div>
        </Container>
    )
};
