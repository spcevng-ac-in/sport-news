import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'

import Logo from "../../assets/images/logo.svg"

import Preferences from './Preferences';
import { UserCircleIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const userNavigation = [
  { name: 'Change Password', to: '/changepassword' },
  { name: 'Sign out', to: '/logout' },
]

const guestNavigation = [
  { name: 'Sign In', to: '/signin' },
  { name: 'Sign Up', to: '/signup' },
]



const Appbar = () => {
  // const { theme, setTheme } = useContext(ThemeContext)
  // const [enabled, setEnabled] = useState(false)
  // const toggleTheme = () => {
  //   let newTheme = ''
  //   if (theme === 'light') {
  //     newTheme = 'dark'
  //   } else {
  //     newTheme = 'light'
  //   }
  //   setEnabled(!enabled)
  //   setTheme(newTheme)
  // }

  let tempUserData = localStorage.getItem("userData") ?? "";
  console.log("User Data 2:", tempUserData);
  let navigation = tempUserData ? userNavigation : guestNavigation;
  let userData = undefined
  if (tempUserData !== undefined && tempUserData.length > 0)
    userData = JSON.parse(tempUserData);

  return (
    <>
      <Disclosure as="nav" className="border-b border-slate-200">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-12"
                  src={Logo}
                  alt="Sport News"
                />
              </div>


            </div>
            <div className="text-center text-3xl font-bold text-blue-600">
              Sports & News Center
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                <div className='text-xl text-purple-600'>Welcome &nbsp;
                  {
                    userData ? (userData.name) : ("Guest")
                  }
                </div>
                {/* <div className="py-16">
                  <Switch
                    checked={enabled}
                    onChange={toggleTheme}
                    className={`${enabled ? 'bg-teal-900' : 'bg-teal-700'}
          relative inline-flex mt-2 pl-0.5 pr-0.5 pt-0.5 h-[22px] w-[42px] 
          shrink-0 cursor-pointer rounded-full border-2 border-transparent 
          transition-colors duration-200 ease-in-out focus:outline-none 
          focus-visible:ring-2  focus-visible:ring-white/75`}
                  >
                    <span className="sr-only">Use setting</span>
                    <span
                      aria-hidden="true"
                      className={`${enabled ? 'translate-x-5' : 'translate-x-0'}
            pointer-events-none inline-block h-[14px] w-[14px] transform rounded-full 
            bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                    />
                  </Switch>
                </div> */}

                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="rounded-full bg-white p-1 text-gray-400 hover:text-blue-600">
                      <Preferences />
                    </Menu.Button>
                    <Menu.Button className="rounded-full bg-white p-1 text-gray-400 hover:text-blue-600">
                      <UserCircleIcon className="w-8 dark:bg-gray-800 dark:text-white bg-white  text-gray-400  dark:hover:text-blue-500 hover:text-blue-600" aria-hidden="true" />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      {/* <Menu.Item key="ChangePassword" >
                        
                        <Link to="/changepassword">
                          <p className="text-gray-700 hover:text-blue-600 m-1">
                            Change Password
                          </p>
                        </Link>
                      </Menu.Item>
                      <Menu.Item key="Signout" >
                        <Link to="/logout">
                          <p className="text-gray-700 hover:text-blue-600  m-1">
                            Sign out
                          </p>
                        </Link>
                        
                      </Menu.Item> */}
                      {navigation.map((item) => (
                        <Menu.Item key={item.name}>
                          {/* {({ active }) => ( */}
                          <Link to={item.to}>
                            <p className="text-gray-700 hover:text-blue-600  m-1">
                              {item.name}
                            </p>
                          </Link>
                          {/* )} */}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>

          </div>

        </div>

      </Disclosure>
    </>
  )
}

export default Appbar;