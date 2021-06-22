/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { Pie } from "react-chartjs-2";

const data = {
  labels: ["Red", "Blue", "Yellow"],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
    },
  ],
};

const navigation = ["Home", "Transaction", "Features", "Budget", "Reports"];
const profile = ["Your Profile", "Settings", "Sign out"];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function home() {
  return (
    <div>
      <Disclosure as="nav" className="bg-gray-50">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img
                      className="h-8 w-8"
                      src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                      alt="Workflow"
                    />
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                      {navigation.map((item, itemIdx) =>
                        itemIdx === 0 ? (
                          <Fragment key={item}>
                            {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                            <a
                              href="#"
                              className="bg-gray-600 text-white px-3 py-2 rounded-md text-sm font-medium"
                            >
                              {item}
                            </a>
                          </Fragment>
                        ) : (
                          <a
                            key={item}
                            href="#"
                            className="text-gray-00 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                          >
                            {item}
                          </a>
                        )
                      )}
                    </div>
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="ml-4 flex items-center md:ml-6">
                    <button className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>

                    {/* Profile dropdown */}
                    <Menu as="div" className="ml-3 relative">
                      {({ open }) => (
                        <>
                          <div>
                            <Menu.Button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                              <span className="sr-only">Open user menu</span>
                              <img
                                className="h-8 w-8 rounded-full"
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt=""
                              />
                            </Menu.Button>
                          </div>
                          <Transition
                            show={open}
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items
                              static
                              className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-sm py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                            >
                              {profile.map((item) => (
                                <Menu.Item key={item}>
                                  {({ active }) => (
                                    <a
                                      href="#"
                                      className={classNames(
                                        active ? "bg-gray-50" : "",
                                        "block px-4 py-2 text-sm text-gray-700"
                                      )}
                                    >
                                      {item}
                                    </a>
                                  )}
                                </Menu.Item>
                              ))}
                            </Menu.Items>
                          </Transition>
                        </>
                      )}
                    </Menu>
                  </div>
                </div>
                <div className="-mr-2 flex md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navigation.map((item, itemIdx) =>
                  itemIdx === 0 ? (
                    <Fragment key={item}>
                      {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                      <a
                        href="#"
                        className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                      >
                        {item}
                      </a>
                    </Fragment>
                  ) : (
                    <a
                      key={item}
                      href="#"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                      {item}
                    </a>
                  )
                )}
              </div>
              <div className="pt-4 pb-3 border-t border-gray-700">
                <div className="flex items-center px-5">
                  <div className="flex-shrink-0">
                    <img
                      className="h-10 w-10 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium leading-none text-white">
                      Tom Cook
                    </div>
                    <div className="text-sm font-medium leading-none text-gray-400">
                      tom@example.com
                    </div>
                  </div>
                  <button className="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="mt-3 px-2 space-y-1">
                  {profile.map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      {/*
      <header className="bg-gray-700 text-yellow-500 shadow">
        <div className="max-w-7xl mx-auto p-4 sm:px-6 lg:px-8">
          <h3 className="text-xl font-bold">LOTUS MONEY</h3>
        </div>
      </header>
      */}
      <main class="bg-gray-50">
        <div className="max-w-7xl mx-auto py-2 sm:px-6 lg:px-8">
          {/* Replace with your content */}
          <div class="flex flex-row text-gray-600">
            <div class="flex-none w-1/4 hidden md:block m-2">
              <div class="grid grid-flow-row gap-4">
                <div class="bg-gray-100 rounded-lg shadow-md p-2">
                  <div class="flex justify-center font-semibold text-blue-500">
                    Top 10 Transactions
                  </div>
                  <div class="flex justify-between items-center">
                    <div class="flex-initial w-3/4">Internet Bill</div>
                    <div class="text-green-500">100</div>
                  </div>
                  <div class="flex justify-between items-center">
                    <div class="flex-initial w-3/4">Electricity Bill</div>
                    <div class="text-red-500">100</div>
                  </div>
                  <div class="flex justify-between items-center">
                    <div class="flex-initial w-3/4">Telephone Bill</div>
                    <div class="text-red-500">100</div>
                  </div>
                  <div class="flex justify-between items-center">
                    <div class="flex-initial w-3/4">Petrol</div>
                    <div class="text-red-500">100</div>
                  </div>
                </div>
                <div class="bg-gray-100 rounded-lg shadow-md p-2">
                  <div class="flex justify-center font-semibold text-blue-500">
                    Categories
                  </div>
                  <div class="flex justify-between items-center">
                    <div class="flex-initial w-3/4">Internet Bill</div>
                    <div class="text-green-500">100</div>
                  </div>
                  <div class="flex justify-between items-center">
                    <div class="flex-initial w-3/4">Electricity Bill</div>
                    <div class="text-red-500">100</div>
                  </div>
                  <div class="flex justify-between items-center">
                    <div class="flex-initial w-3/4">Telephone Bill</div>
                    <div class="text-red-500">100</div>
                  </div>
                  <div class="flex justify-between items-center">
                    <div class="flex-initial w-3/4">Petrol</div>
                    <div class="text-red-500">100</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex-auto p-2">
              <div class="grid grid-flow-row gap-4">
                <div class="flex flex-col justify-center items-center lg:flex-row bg-gray-100 h-auto shadow-md">
                  <div class="rounded-lg p-2 w-1/2">
                    <Pie data={data} />
                  </div>
                  <div class="rounded-lg p-2 w-1/2">
                    <Pie data={data} />
                  </div>
                </div>
                <div class="bg-gray-100 rounded-lg shadow-md p-2">
                  <table class="table-auto w-full">
                    {/* <thead>
                      <tr class="border-b-2 border-gray-300">
                        <th>Title</th>
                        <th>Author</th>
                        <th>Views</th>
                      </tr>
                    </thead> */}
                    <tbody>
                      <tr class="border-b-2 border-gray-200 px-3">
                        <td>Adam</td>
                        <td>Intro to CSS</td>
                        <td>858</td>
                      </tr>
                      <tr class="border-b-2 border-gray-200 px-3">
                        <td>Adam</td>
                        <td>
                          A Long and Winding Tour of the History of UIA Long and
                        </td>
                        <td>112</td>
                      </tr>
                      <tr class="border-b-2 border-gray-200 px-3">
                        <td>Chris</td>
                        <td>Intro to JavaScript</td>
                        <td>1,280</td>
                      </tr>
                      <tr class="border-b-2 border-gray-200 px-3">
                        <td>Adam</td>
                        <td>Intro to CSS</td>
                        <td>858</td>
                      </tr>
                      <tr class="border-b-2 border-gray-200 px-3">
                        <td>Adam</td>
                        <td>
                          A Long and Winding Tour of the History of UIA Long and
                        </td>
                        <td>112</td>
                      </tr>
                      <tr class="border-b-2 border-gray-200 px-3">
                        <td>Chris</td>
                        <td>Intro to JavaScript</td>
                        <td>1,280</td>
                      </tr>
                      <tr class="border-b-2 border-gray-200 px-3">
                        <td>Adam</td>
                        <td>Intro to CSS</td>
                        <td>858</td>
                      </tr>
                      <tr class="border-b-2 border-gray-200 px-3">
                        <td>Adam</td>
                        <td>
                          A Long and Winding Tour of the History of UIA Long and
                        </td>
                        <td>112</td>
                      </tr>
                      <tr class="border-b-2 border-gray-200 px-3">
                        <td>Chris</td>
                        <td>Intro to JavaScript</td>
                        <td>1,280</td>
                      </tr>
                      <tr class="border-b-2 border-gray-200 px-3">
                        <td>Adam</td>
                        <td>Intro to CSS</td>
                        <td>858</td>
                      </tr>
                      <tr class="border-b-2 border-gray-200 px-3">
                        <td>Adam</td>
                        <td>
                          A Long and Winding Tour of the History of UIA Long and
                        </td>
                        <td>112</td>
                      </tr>
                      <tr class="px-3">
                        <td>Chris</td>
                        <td>Intro to JavaScript</td>
                        <td>1,280</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div class="flex-none w-1/4 hidden md:block p-2">
              <div class="grid grid-flow-row gap-4">
                <div class="bg-gray-100 rounded-lg shadow-md p-2">
                  <div class="flex justify-center font-semibold text-blue-500">
                    Uncategorised Transactions
                  </div>
                  <div class="flex justify-between items-center">
                    <div class="flex-initial w-3/4">Internet Bill</div>
                    <div class="text-green-500">100</div>
                  </div>
                  <div class="flex justify-between items-center">
                    <div class="flex-initial w-3/4">Electricity Bill</div>
                    <div class="text-red-500">100</div>
                  </div>
                  <div class="flex justify-between items-center">
                    <div class="flex-initial w-3/4">Telephone Bill</div>
                    <div class="text-red-500">100</div>
                  </div>
                  <div class="flex justify-between items-center">
                    <div class="flex-initial w-3/4">Petrol</div>
                    <div class="text-red-500">100</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /End replace */}
        </div>
      </main>
    </div>
  );
}
