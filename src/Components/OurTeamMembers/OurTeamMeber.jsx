import React from "react";

const OurTeamMeber = () => {
  return (
    <div className="bg-[#F4F2ED]">
      <h1 className="text-secondary text-2xl font-bold text-center pt-4">
        Our Team Member
      </h1>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-8">
        <div className="card  bg-base-100 shadow-xl" data-aos="flip-left">
          <figure>
            <div className="avatar">
              <div className="w-24 mask mask-squircle mt-4">
                <img src="https://i.ibb.co/3Mcq6t2/Maggie-Chan-Jones-1-JWP-WEB-600x400.jpg" />
              </div>
            </div>
          </figure>
          <div className="card-body text-center items-center">
            <h2 className="card-title">Elena Rodriguez</h2>
            <p>
              Elena Rodriguez is a skilled event coordinator who has organized
              numerous successful fundraising galas for non-profit
              organizations.
            </p>
          </div>
        </div>
        <div className="card  bg-base-100 shadow-xl" data-aos="flip-left">
          <figure>
            <div className="avatar">
              <div className="w-24 mask mask-squircle mt-4">
                <img src="https://i.ibb.co/phRKkPT/images.jpg" />
              </div>
            </div>
          </figure>
          <div className="card-body text-center items-center">
            <h2 className="card-title">Alice Smith</h2>
            <p>
              Alice Smith has over a decade of experience in event management,
              specializing in corporate conferences and trade shows.
            </p>
          </div>
        </div>
        <div className="card  bg-base-100 shadow-xl" data-aos="flip-left">
          <figure>
            <div className="avatar">
              <div className="w-24 mask mask-squircle mt-4">
                <img src="https://i.ibb.co/z61py0Y/asds.jpg" />
              </div>
            </div>
          </figure>
          <div className="card-body text-center items-center">
            <h2 className="card-title">Bob Johnson</h2>
            <p>
              Bob Johnson is a certified event planner known for creating
              memorable weddings and social gatherings.
            </p>
          </div>
        </div>
        <div className="card  bg-base-100 shadow-xl" data-aos="flip-left">
          <figure>
            <div className="avatar">
              <div className="w-24 mask mask-squircle mt-4">
                <img src="https://i.ibb.co/3hp1WcB/Untitled.jpg" />
              </div>
            </div>
          </figure>
          <div className="card-body text-center items-center">
            <h2 className="card-title">David Wilson</h2>
            <p>
              David Wilson is a passionate event professional specializing in
              music festivals, known for curating diverse and exciting lineups.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeamMeber;
