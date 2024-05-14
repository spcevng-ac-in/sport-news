import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { API_ENDPOINT } from "../../config/constants";


const ChangePassword = () => {
  interface ChangePasswordPayload {
    current_password: string,
    new_password: string
  }
  
  let [isOpen, setIsOpen] = useState(true);

  let navigate = useNavigate();

  // Use react-hook-form to create form submission handler and state.
  const {
    register,
    handleSubmit,
    formState: { },
  } = useForm<ChangePasswordPayload>();

  function closeModal() {

    setIsOpen(false);
    navigate("../../");
  }
//   const openModal = () => {
//     setIsOpen(true)
 
// }

  const onSubmit: SubmitHandler<ChangePasswordPayload> = async (data) => {
    try {
      console.log("Change Password Data:", data);
      const token = localStorage.getItem("authToken") ?? "";
      // console.log("Token:", token);
      const res = await fetch(`${API_ENDPOINT}/user/password`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        console.log("Error:", JSON.stringify(res));
        console.log("Error:", (res));
        
        // console.log("Message:", res.message);
        // res.json().then(result => console.log(result.data));
        // throw new Error("Failed to Update Passowrd");
      }
      const dataResponse = await res.json();
      console.log("Response", dataResponse.message);
      if(dataResponse.status === 'error')
        alert(dataResponse.message);
      else{
        alert(dataResponse.status);
        closeModal();
      }
      // return dataResponse.message;

      
    } catch (error) {
      console.error("Operation failed:", error);
    }
  };
  return (
    <>
      {/* <UserCircleIcon  className="w-8 dark:bg-gray-800 dark:text-white bg-white  text-gray-400  dark:hover:text-blue-500 hover:text-blue-600" aria-hidden="true" /> */}
{/* <button onClick={openModal}>
  Change Password
</button> */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Change Password
                  </Dialog.Title>
                  <div className="mt-2">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <input
                        type="password"
                        required
                        placeholder="Enter Current Password"
                        autoFocus
                        id="current_password"
                        // Register the current password field
                        {...register("current_password", { required: true })}
                        className="w-full border rounded-md py-2 px-3 my-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
                      />
                      <input
                        type="password"
                        required
                        placeholder="Enter New Password"
                        autoFocus
                        id="new_passowrd"
                        // Register the new password field
                        {...register("new_password", { required: true })}
                        className="w-full border rounded-md py-2 px-3 my-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
                      />

                      <button
                        type="submit"
                        // Set an id for the submit button
                        id="changePassword"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 mr-2 text-sm font-medium text-white hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      >
                        Update
                      </button>
                      <button
                        onClick={closeModal}
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      >
                        Cancel
                      </button>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
export default ChangePassword;