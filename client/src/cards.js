import Card from "react-bootstrap/Card";
import classes from "./cards.module.css";
import axios from "./api";
import "react-multi-carousel/lib/styles.css";
import { Button } from "reactstrap";
import Modal from "./Modal";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
function GroupExample() {
  const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 },
  };
  const [StudData, setStudData] = React.useState([]);
  const [iconTabs, setIconsTabs] = React.useState(1);
  const [textTabs, setTextTabs] = React.useState(4);

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  useEffect(()=>{
    axios
      .get('/topThreeCards/get')
      .then((res) => {
        // console.log(res.data['cards']);
        setStudData(res.data['cards']);
      })
      .catch((err) => console.log(err));
    
  },[])
    // useEffect
  // const StudData = [
    // {
    //   src: "https://images.unsplash.com/photo-1488415032361-b7e238421f1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGdyZWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    //   altText: "Slide 1",
    //   title: "Card 1",
    //   backText:
    //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. In aut temporibus deleniti voluptatum hic debitis praesentium ducimus est, placeat ex aliquam maiores vel labore, eaque culpa. Magnam, libero quos atque blanditiis quas illum deleniti in deserunt possimus esse, sapiente aliquid veniam. Perspiciatis accusantium soluta, hic labore in dolore ab autem repudiandae veritatis maiores laudantium consequuntur unde. Doloribus obcaecati excepturi numquam atque cum, ",
    //   knowMoreText:
    //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. In aut temporibus deleniti voluptatum hic debitis praesentium ducimus est, placeat ex aliquam maiores vel labore, eaque culpa. Magnam, libero quos atque blanditiis quas illum deleniti in deserunt possimus esse, sapiente aliquid veniam. Perspiciatis accusantium soluta, hic labore in dolore ab autem repudiandae veritatis maiores laudantium consequuntur unde. Doloribus obcaecati excepturi numquam atque cum,Lorem ipsum dolor sit amet, consectetur adipisicing elit. In aut temporibus deleniti voluptatum hic debitis praesentium ducimus est, placeat ex aliquam maiores vel labore, eaque culpa. Magnam, libero quos atque blanditiis quas illum deleniti in deserunt possimus esse, sapiente aliquid veniam. Perspiciatis accusantium soluta, hic labore in dolore ab autem repudiandae veritatis maiores laudantium consequuntur unde. Doloribus obcaecati excepturi numquam atque cum,Lorem ipsum dolor sit amet, consectetur adipisicing elit. In aut temporibus deleniti voluptatum hic debitis praesentium ducimus est, placeat ex aliquam maiores vel labore, eaque culpa. Magnam, libero quos atque blanditiis quas illum deleniti in deserunt possimus esse, sapiente aliquid veniam. Perspiciatis accusantium soluta, hic labore in dolore ab autem repudiandae veritatis maiores laudantium consequuntur unde. Doloribus obcaecati excepturi numquam atque cum,",
    //   frontText:
    //     "This is a wider card with supporting text below as a natural lead-into additional content. This content is a little bit longer.",
    //   caption: "Big City Life, United States",
    // },
  //   {
  //     src: "https://images.unsplash.com/photo-1488415032361-b7e238421f1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGdyZWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  //     altText: "Slide 1",
  //     title: "Card 1",
  //     backText:
  //       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. In aut temporibus deleniti voluptatum hic debitis praesentium ducimus est, placeat ex aliquam maiores vel labore, eaque culpa. Magnam, libero quos atque blanditiis quas illum deleniti in deserunt possimus esse, sapiente aliquid veniam. Perspiciatis accusantium soluta, hic labore in dolore ab autem repudiandae veritatis maiores laudantium consequuntur unde. Doloribus obcaecati excepturi numquam atque cum, ",
  //     knowMoreText:
  //       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. In aut temporibus deleniti voluptatum hic debitis praesentium ducimus est, placeat ex aliquam maiores vel labore, eaque culpa. Magnam, libero quos atque blanditiis quas illum deleniti in deserunt possimus esse, sapiente aliquid veniam. Perspiciatis accusantium soluta, hic labore in dolore ab autem repudiandae veritatis maiores laudantium consequuntur unde. Doloribus obcaecati excepturi numquam atque cum,Lorem ipsum dolor sit amet, consectetur adipisicing elit. In aut temporibus deleniti voluptatum hic debitis praesentium ducimus est, placeat ex aliquam maiores vel labore, eaque culpa. Magnam, libero quos atque blanditiis quas illum deleniti in deserunt possimus esse, sapiente aliquid veniam. Perspiciatis accusantium soluta, hic labore in dolore ab autem repudiandae veritatis maiores laudantium consequuntur unde. Doloribus obcaecati excepturi numquam atque cum,Lorem ipsum dolor sit amet, consectetur adipisicing elit. In aut temporibus deleniti voluptatum hic debitis praesentium ducimus est, placeat ex aliquam maiores vel labore, eaque culpa. Magnam, libero quos atque blanditiis quas illum deleniti in deserunt possimus esse, sapiente aliquid veniam. Perspiciatis accusantium soluta, hic labore in dolore ab autem repudiandae veritatis maiores laudantium consequuntur unde. Doloribus obcaecati excepturi numquam atque cum,",
  //     frontText:
  //       "This is a wider card with supporting text below as a natural lead-into additional content. This content is a little bit longer.",
  //     caption: "Big City Life, United States",
  //   },
  //   {
  //     src: "https://images.unsplash.com/photo-1488415032361-b7e238421f1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGdyZWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  //     altText: "Slide 1",
  //     title: "Card 1",
  //     backText:
  //       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. In aut temporibus deleniti voluptatum hic debitis praesentium ducimus est, placeat ex aliquam maiores vel labore, eaque culpa. Magnam, libero quos atque blanditiis quas illum deleniti in deserunt possimus esse, sapiente aliquid veniam. Perspiciatis accusantium soluta, hic labore in dolore ab autem repudiandae veritatis maiores laudantium consequuntur unde. Doloribus obcaecati excepturi numquam atque cum, ",
  //     knowMoreText:
  //       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. In aut temporibus deleniti voluptatum hic debitis praesentium ducimus est, placeat ex aliquam maiores vel labore, eaque culpa. Magnam, libero quos atque blanditiis quas illum deleniti in deserunt possimus esse, sapiente aliquid veniam. Perspiciatis accusantium soluta, hic labore in dolore ab autem repudiandae veritatis maiores laudantium consequuntur unde. Doloribus obcaecati excepturi numquam atque cum,Lorem ipsum dolor sit amet, consectetur adipisicing elit. In aut temporibus deleniti voluptatum hic debitis praesentium ducimus est, placeat ex aliquam maiores vel labore, eaque culpa. Magnam, libero quos atque blanditiis quas illum deleniti in deserunt possimus esse, sapiente aliquid veniam. Perspiciatis accusantium soluta, hic labore in dolore ab autem repudiandae veritatis maiores laudantium consequuntur unde. Doloribus obcaecati excepturi numquam atque cum,Lorem ipsum dolor sit amet, consectetur adipisicing elit. In aut temporibus deleniti voluptatum hic debitis praesentium ducimus est, placeat ex aliquam maiores vel labore, eaque culpa. Magnam, libero quos atque blanditiis quas illum deleniti in deserunt possimus esse, sapiente aliquid veniam. Perspiciatis accusantium soluta, hic labore in dolore ab autem repudiandae veritatis maiores laudantium consequuntur unde. Doloribus obcaecati excepturi numquam atque cum,",
  //     frontText:
  //       "This is a wider card with supporting text below as a natural lead-into additional content. This content is a little bit longer.",
  //     caption: "Big City Life, United States",
  //   },

  //   {
  //     src: "https://images.unsplash.com/photo-1488415032361-b7e238421f1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGdyZWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  //     altText: "Slide 1",
  //     title: "Card 1",
  //     backText:
  //       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. In aut temporibus deleniti voluptatum hic debitis praesentium ducimus est, placeat ex aliquam maiores vel labore, eaque culpa. Magnam, libero quos atque blanditiis quas illum deleniti in deserunt possimus esse, sapiente aliquid veniam. Perspiciatis accusantium soluta, hic labore in dolore ab autem repudiandae veritatis maiores laudantium consequuntur unde. Doloribus obcaecati excepturi numquam atque cum, ",
  //     knowMoreText:
  //       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. In aut temporibus deleniti voluptatum hic debitis praesentium ducimus est, placeat ex aliquam maiores vel labore, eaque culpa. Magnam, libero quos atque blanditiis quas illum deleniti in deserunt possimus esse, sapiente aliquid veniam. Perspiciatis accusantium soluta, hic labore in dolore ab autem repudiandae veritatis maiores laudantium consequuntur unde. Doloribus obcaecati excepturi numquam atque cum,Lorem ipsum dolor sit amet, consectetur adipisicing elit. In aut temporibus deleniti voluptatum hic debitis praesentium ducimus est, placeat ex aliquam maiores vel labore, eaque culpa. Magnam, libero quos atque blanditiis quas illum deleniti in deserunt possimus esse, sapiente aliquid veniam. Perspiciatis accusantium soluta, hic labore in dolore ab autem repudiandae veritatis maiores laudantium consequuntur unde. Doloribus obcaecati excepturi numquam atque cum,Lorem ipsum dolor sit amet, consectetur adipisicing elit. In aut temporibus deleniti voluptatum hic debitis praesentium ducimus est, placeat ex aliquam maiores vel labore, eaque culpa. Magnam, libero quos atque blanditiis quas illum deleniti in deserunt possimus esse, sapiente aliquid veniam. Perspiciatis accusantium soluta, hic labore in dolore ab autem repudiandae veritatis maiores laudantium consequuntur unde. Doloribus obcaecati excepturi numquam atque cum,",
  //     frontText:
  //       "This is a wider card with supporting text below as a natural lead-into additional content. This content is a little bit longer.",
  //     caption: "Big City Life, United States",
  //   },
  //   {
  //     src: "https://images.unsplash.com/photo-1488415032361-b7e238421f1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGdyZWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  //     altText: "Slide 1",
  //     title: "Card 1",
  //     backText:
  //       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. In aut temporibus deleniti voluptatum hic debitis praesentium ducimus est, placeat ex aliquam maiores vel labore, eaque culpa. Magnam, libero quos atque blanditiis quas illum deleniti in deserunt possimus esse, sapiente aliquid veniam. Perspiciatis accusantium soluta, hic labore in dolore ab autem repudiandae veritatis maiores laudantium consequuntur unde. Doloribus obcaecati excepturi numquam atque cum, ",
  //     knowMoreText:
  //       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. In aut temporibus deleniti voluptatum hic debitis praesentium ducimus est, placeat ex aliquam maiores vel labore, eaque culpa. Magnam, libero quos atque blanditiis quas illum deleniti in deserunt possimus esse, sapiente aliquid veniam. Perspiciatis accusantium soluta, hic labore in dolore ab autem repudiandae veritatis maiores laudantium consequuntur unde. Doloribus obcaecati excepturi numquam atque cum,Lorem ipsum dolor sit amet, consectetur adipisicing elit. In aut temporibus deleniti voluptatum hic debitis praesentium ducimus est, placeat ex aliquam maiores vel labore, eaque culpa. Magnam, libero quos atque blanditiis quas illum deleniti in deserunt possimus esse, sapiente aliquid veniam. Perspiciatis accusantium soluta, hic labore in dolore ab autem repudiandae veritatis maiores laudantium consequuntur unde. Doloribus obcaecati excepturi numquam atque cum,Lorem ipsum dolor sit amet, consectetur adipisicing elit. In aut temporibus deleniti voluptatum hic debitis praesentium ducimus est, placeat ex aliquam maiores vel labore, eaque culpa. Magnam, libero quos atque blanditiis quas illum deleniti in deserunt possimus esse, sapiente aliquid veniam. Perspiciatis accusantium soluta, hic labore in dolore ab autem repudiandae veritatis maiores laudantium consequuntur unde. Doloribus obcaecati excepturi numquam atque cum,",
  //     frontText:
  //       "This is a wider card with supporting text below as a natural lead-into additional content. This content is a little bit longer.",
  //     caption: "Big City Life, United States",
  //   },
  // ];
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <div id="Goals">
        <motion.div
          className="box"
          ref={ref}
          variants={boxVariant}
          initial="hidden"
          animate={control}
        >
          <h1 className="title">GOALS</h1>

          <div className={classes.allContainer}>
            {/* {StudData.map((e, i) => {
              {
                console.log(e);
              }
              return (
                <> */}
            <div className="card-group">
              {StudData.map((ele, idx) => {
                return (
                  <>
                    <div
                      className="card d-flex flex-row justify-content-center  align-items-center py-4 px-2"
                      style={{
                        backgroundColor: "transparent",
                        border: "none",
                      }}
                    >
                      <Card
                        className={classes.outerCard}
                        style={{
                          backgroundColor: "#ffffffa6",
                          border: "none",
                        }}
                      >
                        <div class={classes.card}>
                          <div className={classes.flip_card}>
                            <div className={classes.flip_card_inner}>
                              <div className={classes.flip_card_front}>
                                <Card.Img
                                  variant="top"
                                  src={ele.src}
                                  className={classes.image}
                                />
                                <Card.Body>
                                  <Card.Title className={classes.cardTit}>
                                    {ele.title}
                                  </Card.Title>
                                  <Card.Text className={classes.text}>
                                    {ele.frontText}
                                  </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                  {/* <small className="text-muted">
                            Hover to know more
                          </small> */}
                                </Card.Footer>
                              </div>
                              <div className={classes.flip_card_back}>
                                <h5>{ele.backText}</h5>
                                {/* <Button>Know More</Button> */}
                              </div>
                            </div>
                            <Button
                              className={classes.btn}
                              style={{ backgroundColor: "#161660" }}
                              onClick={() => setModalShow(true)}
                            >
                              Know More
                            </Button>
                            <Modal
                              show={modalShow}
                              onHide={() => setModalShow(false)}
                              content={ele.knowMoreText}
                              heading={ele.title}
                            />
                          </div>
                        </div>
                      </Card>
                    </div>
                  </>
                );
              })}
            </div>
            {/* </>
              );
            })} */}
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default GroupExample;
