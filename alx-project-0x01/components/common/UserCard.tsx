import React, { useState } from "react";
import { UserProps } from "@/interfaces";

const PostCard: React.FC<UserProps> = ({
  id,
  name,
  username,
  email,
  address,
  phone,
  website,
  company,
}) => {
  // State to track which section is shown
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const handleClick = (section: string) => {
    // Toggle visibility of the section
    setActiveSection(activeSection === section ? null : section);
  };
  return (
    <div className="my-6">
      <div className="flex border-sm mx-auto max-w-xl bg-white p-5 border-b-2 border-2 overflow-hidden rounded-3xl shadow-lg transition-shadow duration-300 hover:shadow-xl">
        <div className="after:block after:absolute after:bg-green-300 after:w-48 after:h-96 after:-rotate-[35deg] after:-top-24 after:-left-28 mr-5 relative">
          <img
            className="w-32 h-auto bg-slate-500 rounded-full relative z-10"
            src="https://i.pinimg.com/originals/29/55/59/295559e87b67fde4bbd5d5049d67e678.png"
            alt="profile image"
          />
        </div>
        <div className="mb-4 grow">
          <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
          <div className="flex justify-between text-sm text-gray-500">
            <p className="text-gray-600">username: {username}</p>
            <p>User ID: {id}</p>
          </div>

          <ul className="flex justify-center my-2">
            <li
              className="py-1 px-4 hover:bg-gray-200"
              onClick={() => handleClick("email")}
            >
              email
            </li>
            <li
              className="border-l-2 py-1 px-3 hover:bg-gray-200 active:bg-gray-400 focus:bg-gray-600"
              onClick={() => handleClick("address")}
            >
              address
            </li>
            <li
              className="border-l-2 py-1 px-3 hover:bg-gray-200"
              onClick={() => handleClick("phone")}
            >
              phone
            </li>
            <li
              className="border-l-2 py-1 px-3 hover:bg-gray-200"
              onClick={() => handleClick("website")}
            >
              website
            </li>
            <li
              className="border-l-2 py-1 px-3 hover:bg-gray-200"
              onClick={() => handleClick("company")}
            >
              company
            </li>
          </ul>

          <div className={`mt-4 ${activeSection === "email" ? "" : "hidden"}`}>
            email: {email}
          </div>
          <div
            className={`mt-4 ${activeSection === "address" ? "" : "hidden"}`}
          >
            {address.city}, {address.street}, {address.suite}, {address.zipcode}
          </div>
          <div className={`mt-4 ${activeSection === "phone" ? "" : "hidden"}`}>
            phone: {phone}
          </div>
          <div
            className={`mt-4 ${activeSection === "website" ? "" : "hidden"}`}
          >
            website: {website}
          </div>
          <div
            className={`mt-4 ${activeSection === "company" ? "" : "hidden"}`}
          >
            company: {company.name}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;

/*



<div class="my-6">
  <div class="flex border-sm mx-auto max-w-xl  bg-white p-5 border-b-2 border-2 overflow-hidden rounded-3xl  shadow-lg transition-shadow duration-300 hover:shadow-xl">
    <div class="after:block after:absolute after:bg-green-300 after:w-48 after:h-96 after:-rotate-[35deg] after:-top-24 after:-left-28   mr-5 relative">
      <img class="w-32 h-32 bg-slate-500 rounded-full relative z-10" src="#" alt="profile image">
    </div>
    <div class="mb-4  grow">
      <h2 class="text-2xl font-semibold text-gray-800">Leanne Graham</h2>
      <div class=" flex justify-between text-sm text-gray-500">
        <p class="text-gray-600">username: Bret</p>
        <p>User ID: 1</p>
      </div>

      <ul class="flex justify-center my-2">
        <li class="py-1 px-4 hover:bg-gray-200">email</li>
        <li class="border-l-2 py-1 px-3 hover:bg-gray-200 active:bg-gray-400 focus:bg-gray-600">address</li>
        <li class="border-l-2 py-1 px-3 hover:bg-gray-200">phone</li>
        <li class="border-l-2 py-1 px-3 hover:bg-gray-200">website</li>
        <li class="border-l-2 py-1 px-3 hover:bg-gray-200">company</li>
      </ul>
      <div class="mt-4   hidden">email: Sincere@april.biz</div>
      <div class="mt-4  ">city: Gwenborough / street: Kulas Light / suite: Apt. 556</div>
      <div class="mt-4  hidden">phone: 1-770-736-8031 x56442</div>
      <div class="mt-4  hidden">website: hildegard.org</div>
      <div class="mt-4  hidden">company: Romaguera-Crona</div>
      
    </div>
    
    
  </div>
 
    
</div>



<blockquote class="text-2xl font-semibold italic text-center text-slate-900">
  When you look
  <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
    <span class="relative text-white">annoyed</span>
  </span>
  all the time, people think that you're busy.
</blockquote>

<!--  
export interface UserProps {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

{
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
      "lat": "-37.3159",
      "lng": "81.1496"
    }
  },
  "phone": "1-770-736-8031 x56442",
  "website": "hildegard.org",
  "company": {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
  }
}
-->


*/
