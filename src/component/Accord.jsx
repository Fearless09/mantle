import React from 'react'
import { Accordion } from 'flowbite-react'

export default function Accord() {
    return (
        <div className='mt-16 bg-white/[.06] mx-auto md:max-w-lg w-full relative'>
            <Accordion>
                <Accordion.Panel>
                    <Accordion.Title className='bg-black text-white text-sm'>What is Flowbite?</Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons,
                            dropdowns, modals, navbars, and more.
                        </p>
                        <p className="text-gray-500 dark:text-gray-400">
                            Check out this guide to learn how to&nbsp;
                            <a
                                href="https://flowbite.com/docs/getting-started/introduction/"
                                className="text-cyan-600 hover:underline dark:text-cyan-500"
                            >
                                get started&nbsp;
                            </a>
                            and start developing websites even faster with components on top of Tailwind CSS.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>


            </Accordion>
        </div>
    )
}
