import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useGlobalContext } from "./context";

const url =
  "https://api.unsplash.com/search/photos?client_id=7pmB29Xi9rOWHhYpvtuc4edchzh1w0eawUjJwNAqngA";

const Gallery = () => {
  const { searchTheme } = useGlobalContext();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["images", searchTheme],
    queryFn: async () => {
      const result = await axios.get(`${url}&query=${searchTheme}`);
      return result.data;
    },
  });

  if (isLoading) {
    return (
      <section className="image-container">
        <article className="circle">
          <h3> loading...</h3>
        </article>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="image-container">
        <article className="circle">
          <h3> ‼️ There was an error...</h3>
        </article>
      </section>
    );
  }

  const results = data?.results || [];
  if (results.length < 1) {
    return (
      <section className="image-container">
        <h3> No results found...</h3>
      </section>
    );
  }

  return (
    <section className="image-container">
      {results.map((item) => {
        const url = item?.urls?.regular;
        return (
          <img
            src={url}
            key={item.id}
            alt={item.alt_description || "Image"}
            className="img"
          />
        );
      })}
    </section>
  );
};

export default Gallery;
