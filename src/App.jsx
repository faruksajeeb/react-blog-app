export default function App() {
  return (
    <div>
 <div className="navbar bg-base-300 ">
  <div className="flex-1 px-2 lg:flex-none">
    <a className="text-lg font-bold">daisyUI</a>
  </div> 
  <div className="flex justify-end flex-1 px-2">
    <div className="flex items-stretch">
      <a className="btn btn-ghost rounded-btn">Button</a>
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost rounded-btn">Dropdown</label>
        <ul tabIndex={0} className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4">
          <li><a>Item 1</a></li> 
          <li><a>Item 2</a></li>
        </ul>
      </div>
    </div>
  </div>
  
</div>
<div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
<div className="grid grid-flow-col gap-5 text-center auto-cols-max">
  <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span className="countdown font-mono text-5xl">
      <span style={{"--value":15}}></span>
    </span>
    days
  </div> 
  <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span className="countdown font-mono text-5xl">
      <span style={{"--value":10}}></span>
    </span>
    hours
  </div> 
  <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span className="countdown font-mono text-5xl">
      <span style={{"--value":24}}></span>
    </span>
    min
  </div> 
  <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span className="countdown font-mono text-5xl">
      <span style={{"--value":42}}></span>
    </span>
    sec
  </div>
</div>
<span className="loading loading-dots loading-xs"></span>
<span className="loading loading-dots loading-sm"></span>
<span className="loading loading-dots loading-md"></span>
<span className="loading loading-dots loading-lg"></span>
<div className="overflow-x-auto">
  <table className="table table-xs">
    <thead>
      <tr>
        <th></th> 
        <th>Name</th> 
        <th>Job</th> 
        <th>company</th> 
        <th>location</th> 
        <th>Last Login</th> 
        <th>Favorite Color</th>
      </tr>
    </thead> 
    <tbody>
      <tr>
        <th>1</th> 
        <td>Cy Ganderton</td> 
        <td>Quality Control Specialist</td> 
        <td>Littel, Schaden and Vandervort</td> 
        <td>Canada</td> 
        <td>12/16/2020</td> 
        <td>Blue</td>
      </tr>
      <tr>
        <th>2</th> 
        <td>Hart Hagerty</td> 
        <td>Desktop Support Technician</td> 
        <td>Zemlak, Daniel and Leannon</td> 
        <td>United States</td> 
        <td>12/5/2020</td> 
        <td>Purple</td>
      </tr>
      <tr>
        <th>3</th> 
        <td>Brice Swyre</td> 
        <td>Tax Accountant</td> 
        <td>Carroll Group</td> 
        <td>China</td> 
        <td>8/15/2020</td> 
        <td>Red</td>
      </tr>
      <tr>
        <th>4</th> 
        <td>Marjy Ferencz</td> 
        <td>Office Assistant I</td> 
        <td>Rowe-Schoen</td> 
        <td>Russia</td> 
        <td>3/25/2021</td> 
        <td>Crimson</td>
      </tr>
      <tr>
        <th>5</th> 
        <td>Yancy Tear</td> 
        <td>Community Outreach Specialist</td> 
        <td>Wyman-Ledner</td> 
        <td>Brazil</td> 
        <td>5/22/2020</td> 
        <td>Indigo</td>
      </tr>
      <tr>
        <th>6</th> 
        <td>Irma Vasilik</td> 
        <td>Editor</td> 
        <td>Wiza, Bins and Emard</td> 
        <td>Venezuela</td> 
        <td>12/8/2020</td> 
        <td>Purple</td>
      </tr>
      <tr>
        <th>7</th> 
        <td>Meghann Durtnal</td> 
        <td>Staff Accountant IV</td> 
        <td>Schuster-Schimmel</td> 
        <td>Philippines</td> 
        <td>2/17/2021</td> 
        <td>Yellow</td>
      </tr>
      <tr>
        <th>8</th> 
        <td>Sammy Seston</td> 
        <td>Accountant I</td> 
        <td>O'Hara, Welch and Keebler</td> 
        <td>Indonesia</td> 
        <td>5/23/2020</td> 
        <td>Crimson</td>
      </tr>
      <tr>
        <th>9</th> 
        <td>Lesya Tinham</td> 
        <td>Safety Technician IV</td> 
        <td>Turner-Kuhlman</td> 
        <td>Philippines</td> 
        <td>2/21/2021</td> 
        <td>Maroon</td>
      </tr>
      <tr>
        <th>10</th> 
        <td>Zaneta Tewkesbury</td> 
        <td>VP Marketing</td> 
        <td>Sauer LLC</td> 
        <td>Chad</td> 
        <td>6/23/2020</td> 
        <td>Green</td>
      </tr>
      <tr>
        <th>11</th> 
        <td>Andy Tipple</td> 
        <td>Librarian</td> 
        <td>Hilpert Group</td> 
        <td>Poland</td> 
        <td>7/9/2020</td> 
        <td>Indigo</td>
      </tr>
      <tr>
        <th>12</th> 
        <td>Sophi Biles</td> 
        <td>Recruiting Manager</td> 
        <td>Gutmann Inc</td> 
        <td>Indonesia</td> 
        <td>2/12/2021</td> 
        <td>Maroon</td>
      </tr>
      <tr>
        <th>13</th> 
        <td>Florida Garces</td> 
        <td>Web Developer IV</td> 
        <td>Gaylord, Pacocha and Baumbach</td> 
        <td>Poland</td> 
        <td>5/31/2020</td> 
        <td>Purple</td>
      </tr>
      <tr>
        <th>14</th> 
        <td>Maribeth Popping</td> 
        <td>Analyst Programmer</td> 
        <td>Deckow-Pouros</td> 
        <td>Portugal</td> 
        <td>4/27/2021</td> 
        <td>Aquamarine</td>
      </tr>
      <tr>
        <th>15</th> 
        <td>Moritz Dryburgh</td> 
        <td>Dental Hygienist</td> 
        <td>Schiller, Cole and Hackett</td> 
        <td>Sri Lanka</td> 
        <td>8/8/2020</td> 
        <td>Crimson</td>
      </tr>
      <tr>
        <th>16</th> 
        <td>Reid Semiras</td> 
        <td>Teacher</td> 
        <td>Sporer, Sipes and Rogahn</td> 
        <td>Poland</td> 
        <td>7/30/2020</td> 
        <td>Green</td>
      </tr>
      <tr>
        <th>17</th> 
        <td>Alec Lethby</td> 
        <td>Teacher</td> 
        <td>Reichel, Glover and Hamill</td> 
        <td>China</td> 
        <td>2/28/2021</td> 
        <td>Khaki</td>
      </tr>
      <tr>
        <th>18</th> 
        <td>Aland Wilber</td> 
        <td>Quality Control Specialist</td> 
        <td>Kshlerin, Rogahn and Swaniawski</td> 
        <td>Czech Republic</td> 
        <td>9/29/2020</td> 
        <td>Purple</td>
      </tr>
      <tr>
        <th>19</th> 
        <td>Teddie Duerden</td> 
        <td>Staff Accountant III</td> 
        <td>Pouros, Ullrich and Windler</td> 
        <td>France</td> 
        <td>10/27/2020</td> 
        <td>Aquamarine</td>
      </tr>
      <tr>
        <th>20</th> 
        <td>Lorelei Blackstone</td> 
        <td>Data Coordiator</td> 
        <td>Witting, Kutch and Greenfelder</td> 
        <td>Kazakhstan</td> 
        <td>6/3/2020</td> 
        <td>Red</td>
      </tr>
    </tbody> 
    <tfoot>
      <tr>
        <th></th> 
        <th>Name</th> 
        <th>Job</th> 
        <th>company</th> 
        <th>location</th> 
        <th>Last Login</th> 
        <th>Favorite Color</th>
      </tr>
    </tfoot>
  </table>
</div>
    </div>
   
  )
}