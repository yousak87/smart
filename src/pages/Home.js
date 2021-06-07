import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchData, setThumbnail, setFindText } from "../action/fetchData.js";
import { setLoading } from "../action/loading";

import AlbumList from "../components/AlbumList";
import SearchForm from "../components/SearchForm";

function Home(props) {
  const { fetchData, setThumbnail, data, setLoading, setFindText } = props;
  const [dataJoin, setDataJoin] = useState([]);

  const handleClick = (photoList) => {
    setThumbnail(photoList);
  };

  useEffect(() => {
    setLoading(true);
    fetchData();
  }, []);

  useEffect(() => {
    setDataJoin(
      innerJoinResponse(data.users, data.album, data.photo, data.findText)
    );
  }, [data.album]);

  const innerJoinResponse = (users, album, photo, filter) => {
    let newAlbum = [];
    album.map((alb) => {
      alb.users = users.filter((user) => user.id === alb.userId);
      alb.photo = photo.filter((phot) => phot.albumId === alb.id);

      newAlbum.push(alb);
    });

    if (filter) {
      let filterAlbum = [];

      newAlbum.map((newAlb) => {
        if (newAlb.title.includes(filter)) {
          filterAlbum.push(newAlb);
          return;
        }

        newAlb.photo.map((ph) => {
          if (ph.title.includes(filter)) {
            filterAlbum.push(newAlb);
            return;
          }
        });

        newAlb.users.map((user) => {
          if (
            user.address.city.includes(filter) ||
            user.company.name.includes(filter)
          ) {
            filterAlbum.push(newAlb);
            return;
          }
        });
      });

      newAlbum = filterAlbum;
    }

    return newAlbum;
  };

  function handleSubmit(e, name) {
    setLoading(true);
    fetchData();
    setFindText(name);
    e.preventDefault();
  }

  return (
    <main>
      <SearchForm handleSubmit={handleSubmit} />
      <AlbumList dataJoin={dataJoin} handleClick={handleClick} />
    </main>
  );
}

const mapStateToProps = (state) => ({
  data: state.data,
});

Home = connect(mapStateToProps, {
  fetchData,
  setThumbnail,
  setLoading,
  setFindText,
})(Home);

export default Home;
