import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";

const SingleUserPage = async () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        {/* {user.username} */}
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <input type="hidden" name="id" />
          <label>Username</label>
          <input type="text" name="username" />
          <label>Email</label>
          <input type="email" name="email" />
          <label>Password</label>
          <input type="password" name="password" />
          <label>Phone</label>
          <input type="text" name="phone" />
          <label>Address</label>
          <textarea type="text" name="address" />
          <label>Is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            {/* <option value={true} selected={user.isAdmin}>Yes</option>
              <option value={false} selected={!user.isAdmin}>No</option> */}
          </select>
          <label>Is Active?</label>
          <select name="isActive" id="isActive">
            {/* <option value={true} selected={user.isActive}>Yes</option>
              <option value={false} selected={!user.isActive}>No</option> */}
          </select>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
