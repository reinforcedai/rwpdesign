import React, { memo, useEffect, useState } from 'react';
import axios from 'axios';

import { Block, Container } from './components';
import { Bar } from 'react-chartjs-2';

const HomePage = ({ global: { plugins }, history: { push } }) => {
  let [ usersCount, setUsersCount ] = useState(0);
  let [ contactsCount, setContactsCount ] = useState(0);
  let [ galleriesCount, setGalleriesCount ] = useState(0);
  let [ testimonialsCount, setTestimonialsCount ] = useState(0);

  useEffect(() => {
    let fetchCounts = async () => {
      // let users = await axios.get("http://localhost:1337/users/count");
      let contacts = await axios.get("http://localhost:1337/contacts/count");
      let gelleries = await axios.get("http://localhost:1337/galleries/count");
      let testimonials = await axios.get("http://localhost:1337/testimonials/count");
      if (testimonials.status == 200) {
        // setUsersCount(users.data);
        setContactsCount(contacts.data);
        setGalleriesCount(gelleries.data);
        setTestimonialsCount(testimonials.data);
      } else {
        console.log('backend error');
      }
    }
    fetchCounts();
  }, []);

  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: 'bar height',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
      },
    ],
  };
  
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  
  return (
    <>
      <Container className="container-fluid">
        <div className="row">
          <div className="col-3">
            <Block>Users: {usersCount}</Block>
          </div>
          <div className="col-3">
            <Block>Contacts: {contactsCount}</Block>
          </div>
          <div className="col-3">
            <Block>Galleries: {galleriesCount}</Block>
          </div>
          <div className="col-3">
            <Block>Testimonials: {testimonialsCount}</Block>
          </div>
          <div className="col-12">
            <Block>
              <h1 className='title'>Bar Chart</h1>
              <Bar data={data} height={100} />
            </Block>
          </div>
        </div>
      </Container>
    </>
  );
};

export default memo(HomePage);
 