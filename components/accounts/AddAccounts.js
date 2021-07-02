import { useRouter } from "next/router";
import { useCallback } from "react";

function addcategory() {
  const router = useRouter();
  const handleSubmit = useCallback((event) => {
    event.preventDefault();

    fetch("/api/user/accounts", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        account: event.target.account.value,
      }),
    })
      .then((res) => {
        console.log(`Front end authentication response ${JSON.stringify(res)}`);
        if (res.ok) {
          console.log(`res ok ${res}`);
          router.push("/accounts");
        } else {
          console.log(`res ok else ${res}`);
          router.push("/accounts");
        }
      })
      .catch((error) => {
        console.log(
          `Front end authentication error response ${JSON.stringify(error)}`
        );
        router.push("/");
      });
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-row">
        <input
          type="text"
          name="account"
          id="account"
          placeholder="Account"
          className="w-3/4 mr-2 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
          autoFocus
          autoComplete="true"
          required
        />
        <button
          type="submit"
          className="w-1/4 mt-2 bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg"
        >
          Add
        </button>
      </div>
    </form>
  );
}

export default addcategory;
