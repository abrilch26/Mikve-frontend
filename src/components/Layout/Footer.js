import React from 'react'

export default function Footer() {
    return (
        <footer class="bg-neutral-800" aria-labelledby="footer-heading">
            <h2 id="footer-heading" class="sr-only">Footer</h2>
            <div class="max-w-7xl mx-auto pb-8 px-4 sm:px-6 lg:pt-14 lg:px-8">
                <div class="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div class="grid grid-cols-2 gap-8 xl:col-span-2">
                        <div class="md:grid md:grid-cols-2 md:gap-8">

                            <div class="mt-12 md:mt-0">
                                <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                                    Sobre April
                                </h3>
                                <ul role="list" class="mt-4 space-y-4">
                                    <li>
                                        <a href="https://www.instagram.com/abril_ch/" class="text-base font-mono text-gray-500 hover:text-gray-900">
                                            Instagram
                                        </a>
                                    </li>

                                    <li>
                                        <a href="https://github.com/abrilch26" class="text-base font-mono text-gray-500 hover:text-gray-900">
                                            Github
                                        </a>
                                    </li>

                                    <li>
                                        <a href="https://twitter.com/abril_ch26" class="text-base font-mono text-gray-500 hover:text-gray-900">
                                            Twitter
                                        </a>
                                    </li>

                                    <li>
                                        <a href="https://mx.linkedin.com/in/abril-ch%C3%A1vez-romero-552702209" class="text-base  font-mono text-gray-500 hover:text-gray-900">
                                            LinkedIn
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div class="mt-12 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between lg:mt-16">
                    <div class="flex space-x-6 md:order-2">


                        <a href="https://github.com/abrilch26/Mikve-frontend" class="text-gray-400 font-mono hover:text-gray-500">
                            <span class="sr-only">GitHub</span>
                            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
                            </svg>
                        </a>


                    </div>
                    <p class="mt-8 font-mono text-base text-gray-400 md:mt-0 md:order-1">
                        &copy; 2021 MIKVE by Abril Chávez A.C. This is a fictional app.
                    </p>
                </div>
            </div>
        </footer>
    )
}
