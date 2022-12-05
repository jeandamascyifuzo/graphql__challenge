import { useMutation, useQuery } from "@apollo/client";
import { DELETE_Nation } from "../GraphQL/Mutation";
import { getALL } from "../GraphQL/Query";

const AllNation = () => {
  const { loading, error, data } = useQuery(getALL);

  const [deleteNation, { errr }] = useMutation(DELETE_Nation);

  const removeNation = (id) => {
    deleteNation({
      variables: {
        id: id,
      },
    });
  };

  const res = data?.getAll;
  if (loading) return "Loading...";

  return (
    <div className="containers">
      <div className="content">
        {res?.map((item) => (
          <div className="card" key={item.id}>
            <div className="header">
              <div className="img-box">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    fill="rgba(66,193,110,1)"
                    d="M20.083 15.2l1.202.721a.5.5 0 0 1 0 .858l-8.77 5.262a1 1 0 0 1-1.03 0l-8.77-5.262a.5.5 0 0 1 0-.858l1.202-.721L12 20.05l8.083-4.85zm0-4.7l1.202.721a.5.5 0 0 1 0 .858L12 17.65l-9.285-5.571a.5.5 0 0 1 0-.858l1.202-.721L12 15.35l8.083-4.85zm-7.569-9.191l8.771 5.262a.5.5 0 0 1 0 .858L12 13 2.715 7.429a.5.5 0 0 1 0-.858l8.77-5.262a1 1 0 0 1 1.03 0zM12 3.332L5.887 7 12 10.668 18.113 7 12 3.332z"
                  ></path>
                </svg>
              </div>
              <h1 className="title">{item.country}</h1>
            </div>
            <h3>Total Population {item.totalPopulation}</h3>
            <span>Total Area {item.area}</span>
            <p>Year {item.year}</p>
            <button className="btn-link" onClick={() => removeNation(item.id)}>
              Delete
            </button>
            <button className="btn-update">update</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllNation;
