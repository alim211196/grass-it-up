import React from "react";

const ProfileInfo = () => {
  return (
    <div className="profile-info">
      <h2 className="profile-name" data-aos="fade-up" data-aos-delay="100">
        John Doe
      </h2>
      <p className="profile-role" data-aos="fade-up" data-aos-delay="100">
        Product Designer
      </p>

      <p
        className="profile-description"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        All the Lorem Ipsum generators on the Internet tend to repeat predefined
        on the Internet. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Non, lobortis in in tortor lectus iaculis viverra. Adipiscing
        lobortis interdum fringilla euismod odio vitae nam pulvinar elementum.
        Nibh purus integer elementum in. Tellus vulputate habitasse ut vulputate
        posuere habitant vel tempor varius.
      </p>

      <div className="profile-contact" data-aos="fade-up" data-aos-delay="100">
        <p>
          <span style={{ paddingRight: "5px" }}>
            <strong>Phone: </strong>
          </span>{" "}
          +111 - (1234 5678 99)
        </p>
        <p>
          <span style={{ paddingRight: "5px" }}>
            <strong>Email: </strong>
          </span>{" "}
          grassitup123@gmail.com
        </p>
        <p>
          <span style={{ paddingRight: "5px" }}>
            <strong>Location: </strong>
          </span>{" "}
          23/ A Lake Side, New Arizona, USA
        </p>
      </div>
    </div>
  );
};

export default ProfileInfo;
