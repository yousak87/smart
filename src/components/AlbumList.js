import React from "react";
import Album from "./Album";
import Loading from "./Loading";
import { connect } from "react-redux";

export default function AlbumList(props) {
  const { handleClick, dataJoin, loading } = props;

  if (loading) {
    return <Loading />;
  }

  if (dataJoin.length < 1) {
    return (
      <h2 className="section-title">no data matched your search criteria</h2>
    );
  }
  return (
    <section className="section">
      <h2 className="section-title">cocktails</h2>
      <div className="cocktails-center">
        {dataJoin.map((item) => {
          return <Album key={item.id} {...item} handleClick={handleClick} />;
        })}
      </div>
    </section>
  );
}

const mapStateToProps = (state) => ({
  loading: state.data.isLoading,
});

AlbumList = connect(mapStateToProps, {})(AlbumList);
