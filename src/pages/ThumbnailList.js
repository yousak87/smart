import React, { useState } from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
import { connect } from "react-redux";
import Thumbnail from "../components/Thumbnail";

function ThumbnailList(props) {
  const { data } = props;
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 1000);
  if (loading) {
    return <Loading />;
  }

  return (
    <section className="section">
      <h2 className="section-title">Thumbnail</h2>
      <div className="cocktails-center">
        {data.selectedThumbnail.map((item) => {
          return <Thumbnail key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
}

const mapStateToProps = (state) => ({
  data: state.data,
});

ThumbnailList = connect(mapStateToProps, {})(ThumbnailList);

export default ThumbnailList;
