import React from 'react'
import { Link } from "react-router-dom";
import SearchBar from '../components/Searchbar';

const Result= () => {
  return (
      <div class="overflow-x-hidden bg-gray-100">
        <SearchBar/>
          <div class="px-6 py-8">
              <div class="container flex justify-between mx-auto">
                  <div class="w-full lg:w-8/12">
                      <div class="flex items-center justify-between">
                          <h1 class="text-xl font-bold text-[#173e26] md:text-2xl">Search Result:</h1>
                          <div>
                              <select class="w-[200px] border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-[#173e26] focus:ring-opacity-50">
                                  <option>Latest</option>
                                  <option>Last Week</option>
                              </select>
                          </div>
                      </div>
                      <div class="mt-6">
                          <div class="max-w-4xl px-10 py-6 mx-auto bg-white rounded-lg shadow-md">
                              <div class="flex items-center justify-between"><span class="font-light text-gray-600">Jun 1,
                                      2020</span>
                                      <Link to="/" class="px-2 py-1 font-bold text-gray-100 bg-[#173e26] rounded hover:bg-[#24542f]">Economy</Link>
                              </div>
                              <div class="mt-2"><Link to="/" class="text-2xl font-bold text-[#173e26] hover:underline">Capital Market in Ethiopia</Link>
                                  <p class="mt-2 text-black">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                      Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim
                                      reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!</p>
                              </div>
                              <div class="flex items-center justify-between mt-4">
                                <Link to="/" class="text-[#24542f] hover:underline">Read more</Link>
                                  <div>
                                    <a href="#" class="flex items-center">
                                      <img src="https://www.flagcolorcodes.com/filter?f=ethiopia&e=waves"
                                           alt="avatar" class="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"/>
                                      <h1 class="font-bold text-[#173e26] hover:underline">Ethiopia</h1>
                                    </a>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="mt-6">
                          <div class="max-w-4xl px-10 py-6 mx-auto bg-white rounded-lg shadow-md">
                              <div class="flex items-center justify-between"><span class="font-light text-gray-600">Jun 1,
                                      2020</span>
                                      <Link to="/" class="px-2 py-1 font-bold text-gray-100 bg-[#173e26] rounded hover:bg-[#24542f]">Investment</Link>
                              </div>
                              <div class="mt-2"><Link to="/" class="text-2xl font-bold text-[#173e26] hover:underline">Capital Market in Ethiopia</Link>
                                  <p class="mt-2 text-black">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                      Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim
                                      reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!</p>
                              </div>
                              <div class="flex items-center justify-between mt-4">
                                <Link to="/" class="text-[#24542f] hover:underline">Read more</Link>
                                  <div>
                                    <a href="#" class="flex items-center">
                                      <img src="https://www.flagcolorcodes.com/filter?f=ethiopia&e=waves"
                                           alt="avatar" class="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"/>
                                      <h1 class="font-bold text-[#173e26] hover:underline">Ethiopia</h1>
                                    </a>
                                  </div>
                              </div>
                          </div>
                      </div>
                      {/* <h1 class="text-xl font-bold text-[#173e26] md:text-2xl mt-6">Topics Related:</h1> */}
                      <div class="mt-6">
                          <div class="max-w-4xl px-10 py-6 mx-auto bg-white rounded-lg shadow-md">
                              <div class="flex items-center justify-between"><span class="font-light text-gray-600">Jun 1,
                                      2020</span>
                                      <Link to="/" class="px-2 py-1 font-bold text-gray-100 bg-[#173e26] rounded hover:bg-[#24542f]">Trade</Link>
                              </div>
                              <div class="mt-2"><Link to="/" class="text-2xl font-bold text-[#173e26] hover:underline">Trade in Addis Ababa</Link>
                                  <p class="mt-2 text-black">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                      Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim
                                      reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!</p>
                              </div>
                              <div class="flex items-center justify-between mt-4">
                                <Link to="/" class="text-[#24542f] hover:underline">Read more</Link>
                                  <div>
                                    <a href="#" class="flex items-center">
                                      <img src="https://www.flagcolorcodes.com/filter?f=ethiopia&e=waves"
                                           alt="avatar" class="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"/>
                                      <h1 class="font-bold text-[#173e26] hover:underline">Ethiopia</h1>
                                    </a>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="mt-6">
                          <div class="max-w-4xl px-10 py-6 mx-auto bg-white rounded-lg shadow-md">
                              <div class="flex items-center justify-between"><span class="font-light text-gray-600">Jun 1,
                                      2020</span>
                                      <Link to="/" class="px-2 py-1 font-bold text-gray-100 bg-[#173e26] rounded hover:bg-[#24542f]">Economy</Link>
                              </div>
                              <div class="mt-2"><Link to="/" class="text-2xl font-bold text-[#173e26] hover:underline">Capital Market in Ethiopia</Link>
                                  <p class="mt-2 text-black">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                      Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim
                                      reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!</p>
                              </div>
                              <div class="flex items-center justify-between mt-4">
                                <Link to="/" class="text-[#24542f] hover:underline">Read more</Link>
                                  <div>
                                    <a href="#" class="flex items-center">
                                      <img src="https://www.flagcolorcodes.com/filter?f=ethiopia&e=waves"
                                           alt="avatar" class="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"/>
                                      <h1 class="font-bold text-[#173e26] hover:underline">Ethiopia</h1>
                                    </a>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="mt-6">
                          <div class="max-w-4xl px-10 py-6 mx-auto bg-white rounded-lg shadow-md">
                              <div class="flex items-center justify-between"><span class="font-light text-gray-600">Jun 1,
                                      2020</span>
                                      <Link to="/" class="px-2 py-1 font-bold text-gray-100 bg-[#173e26] rounded hover:bg-[#24542f]">Economy</Link>
                              </div>
                              <div class="mt-2"><Link to="/" class="text-2xl font-bold text-[#173e26] hover:underline">Capital Market in Ethiopia</Link>
                                  <p class="mt-2 text-black">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                      Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim
                                      reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!</p>
                              </div>
                              <div class="flex items-center justify-between mt-4">
                                <Link to="/" class="text-[#24542f] hover:underline">Read more</Link>
                                  <div>
                                    <a href="#" class="flex items-center">
                                      <img src="https://www.flagcolorcodes.com/filter?f=ethiopia&e=waves"
                                           alt="avatar" class="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"/>
                                      <h1 class="font-bold text-[#173e26] hover:underline">Ethiopia</h1>
                                    </a>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="mt-6">
                          <div class="max-w-4xl px-10 py-6 mx-auto bg-white rounded-lg shadow-md">
                              <div class="flex items-center justify-between"><span class="font-light text-gray-600">Jun 1,
                                      2020</span>
                                      <Link to="/" class="px-2 py-1 font-bold text-gray-100 bg-[#173e26] rounded hover:bg-[#24542f]">Economy</Link>
                              </div>
                              <div class="mt-2"><Link to="/" class="text-2xl font-bold text-[#173e26] hover:underline">Capital Market in Ethiopia</Link>
                                  <p class="mt-2 text-black">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                      Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim
                                      reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!</p>
                              </div>
                              <div class="flex items-center justify-between mt-4">
                                <Link to="/" class="text-[#24542f] hover:underline">Read more</Link>
                                  <div>
                                    <a href="#" class="flex items-center">
                                      <img src="https://www.flagcolorcodes.com/filter?f=ethiopia&e=waves"
                                           alt="avatar" class="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"/>
                                      <h1 class="font-bold text-[#173e26] hover:underline">Ethiopia</h1>
                                    </a>
                                  </div>
                              </div>
                          </div>
                      </div>
                      
                      <div class="mt-8">
                          <div class="flex">
                              <Link to="/" class="px-3 py-2 mx-1 font-medium text-gray-500 bg-white rounded-md cursor-not-allowed">
                                  previous
                              </Link>
                          
                              <Link to="/searchresult" class="px-3 py-2 mx-1 font-medium text-gray-700 bg-white rounded-md hover:bg-[#24542f] hover:text-white">
                                  1
                              </Link>
                          
                              <Link to="/searchresult" class="px-3 py-2 mx-1 font-medium text-gray-700 bg-white rounded-md hover:bg-[#24542f] hover:text-white">
                                  2
                              </Link>
                          
                              <Link to="/searchresult" class="px-3 py-2 mx-1 font-medium text-gray-700 bg-white rounded-md hover:bg-[#24542f] hover:text-white">
                                  3
                              </Link>
                          
                              <Link to="/searchresult" class="px-3 py-2 mx-1 font-medium text-[#173e26] bg-white rounded-md hover:bg-[#24542f] hover:text-white">
                                  Next
                              </Link>
                          </div>
                      </div>
                  </div>
                  <div class="hidden w-4/12 -mx-8 lg:block">
                      <div class="px-8">
                          <h1 class="mb-4 text-xl font-bold text-[#173e26]">Region</h1>
                          <div class="flex flex-col max-w-sm px-6 py-4 mx-auto bg-white rounded-lg shadow-md">
                              <ul class="-mx-4">
                                  <li class="flex items-center">
                                    <img src="https://www.flagcolorcodes.com/filter?f=ethiopia&e=waves"
                                         alt="avatar" class="object-cover w-10 h-10 mx-4 rounded-full"/>
                                      <p><Link to="/" class="mx-1 font-bold text-[#173e26] hover:underline">Ethiopia</Link>
                                      <span class=" text-sm font-light text-gray-700"> 23 Files</span></p>
                                  </li>
                                  <li class="flex items-center mt-6">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Flag_of_the_Afar_Region.svg/2560px-Flag_of_the_Afar_Region.svg.png"
                                         alt="avatar" class="object-cover w-10 h-10 mx-4 rounded-full"/>
                                      <p><Link to="/" class="mx-1 font-bold text-[#173e26] hover:underline">Afar Region</Link><span
                                              class="text-sm font-light text-gray-700">82 Files</span></p>
                                  </li>
                                  <li class="flex items-center mt-6">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Flag_of_the_Tigray_Region.svg/1280px-Flag_of_the_Tigray_Region.svg.png"
                                         alt="avatar" class="object-cover w-10 h-10 mx-4 rounded-full"/>
                                      <p><Link to="/" class="mx-1 font-bold text-[#173e26] hover:underline">Tigray Region</Link><span
                                              class="text-sm font-light text-gray-700">52 Files</span></p>
                                  </li>
                                  <li class="flex items-center mt-6">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Flag_of_the_Oromia_Region.svg/2560px-Flag_of_the_Oromia_Region.svg.png"
                                         alt="avatar" class="object-cover w-10 h-10 mx-4 rounded-full"/>
                                      <p><Link to="/" class="mx-1 font-bold text-[#173e26] hover:underline">Oromia Region</Link><span
                                              class="text-sm font-light text-gray-700">12 Files</span></p>
                                  </li>
                                  <li class="flex items-center mt-6">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Flag_of_the_Amhara_Region.svg/2560px-Flag_of_the_Amhara_Region.svg.png"
                                         alt="avatar" class="object-cover w-10 h-10 mx-4 rounded-full"/>
                                      <p><Link to="/" class="mx-1 font-bold text-[#173e26] hover:underline">Amhara Region</Link><span
                                              class="text-sm font-light text-gray-700">42 Files</span></p>
                                  </li>
                                  <li class="flex items-center mt-6">
                                    <img src="https://static.euronews.com/articles/535237/1024x538_535237.jpg"
                                         alt="avatar" class="object-cover w-10 h-10 mx-4 rounded-full"/>
                                      <p><Link to="/" class="mx-1 font-bold text-[#173e26] hover:underline">Somali Region</Link><span
                                              class="text-sm font-light text-gray-700">72 Files</span></p>
                                  </li>
                                  
                              </ul>
                          </div>
                      </div>
                      <div class="px-8 mt-10">
                          <h1 class="mb-4 text-xl font-bold text-[#173e26]">Data Type</h1>
                          <div class="flex flex-col max-w-sm px-4 py-6 mx-auto bg-white rounded-lg shadow-md">
                              <ul>
                                  <li><Link href="#" class="mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline">-
                                          Economy</Link></li>
                                  <li class="mt-2"><Link to="/"
                                          class="mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline">-
                                          Infrastructure</Link></li>
                                  <li class="mt-2"><Link to="/"
                                          class="mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline">- Market</Link>
                                  </li>
                                  <li class="mt-2"><Link to="/"
                                          class="mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline">-
                                          Investment</Link></li>
                                  <li class="flex items-center mt-2"><a to="/"
                                          class="mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline">-
                                          Social</a></li>
                                  <li class="flex items-center mt-2"><Link to="/"
                                          class="mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline">- Trade</Link>
                                  </li>
                              </ul>
                          </div>
                      </div>
                      <div class="px-8 mt-10">
                          <h1 class="mb-4 text-xl font-bold text-[#173e26]">Related</h1>
                          <div class="flex flex-col max-w-sm px-8 py-6 mx-auto bg-white rounded-lg shadow-md">
                              <div class="flex items-center justify-center"><Link to="/"
                                      class="px-2 py-1 text-sm text-white bg-[#173e26] rounded hover:bg-[#24542f]">Investment</Link>
                              </div>
                              <div class="mt-4"><a href="#" class="text-lg font-medium text-[#173e26] hover:underline">Investment in Afar Region.</a></div>
                              <div class="flex items-center justify-between mt-4">
                                  <div class="flex items-center"><img
                                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Flag_of_the_Afar_Region.svg/2560px-Flag_of_the_Afar_Region.svg.png"
                                          alt="avatar" class="object-cover w-8 h-8 rounded-full"/><a href="#"
                                          class="mx-3 text-sm text-gray-700 hover:underline">Afar</a></div><span
                                      class="text-sm font-light text-gray-600">Jun 1, 2020</span>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Result