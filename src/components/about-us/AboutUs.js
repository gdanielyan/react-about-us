// Dependencies
import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// Components & Styles
import GroupedPane from './grouped-pane/GroupedPane';
import Thumbnail from './thumbnail/Thumbnail';
import './AboutUs.scss'

const employees = [
  {id: '1', title: 'CEO', thumbnail: 'https://images.unsplash.com/photo-1495147334217-fcb3445babd5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=800&w=800&q=60', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices erat et eros hendrerit, et vehicula lorem porta. Quisque vel blandit massa. Integer libero velit, tristique porta finibus et, mollis in mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare nunc vitae lorem scelerisque, ac posuere metus tincidunt. Etiam vitae nunc quis lacus tristique scelerisque.'},
  {id: '2', title: 'Associate Designer', thumbnail: 'https://images.unsplash.com/photo-1498507201412-ab62bad37273?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=800&w=800&q=60', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices erat et eros hendrerit, et vehicula lorem porta. Quisque vel blandit massa. Integer libero velit, tristique porta finibus et, mollis in mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare nunc vitae lorem scelerisque, ac posuere metus tincidunt. Etiam vitae nunc quis lacus tristique scelerisque.'},
  {id: '3', title: 'CTO', thumbnail: 'https://images.unsplash.com/photo-1520347781254-4ce0db5e03a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=800&w=800&q=60', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices erat et eros hendrerit, et vehicula lorem porta. Quisque vel blandit massa. Integer libero velit, tristique porta finibus et, mollis in mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare nunc vitae lorem scelerisque, ac posuere metus tincidunt. Etiam vitae nunc quis lacus tristique scelerisque.'},
  {id: '4', title: 'Delivery and Operations', thumbnail: 'https://images.unsplash.com/photo-1542178243-bc20204b769f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=800&w=800&q=60', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices erat et eros hendrerit, et vehicula lorem porta. Quisque vel blandit massa. Integer libero velit, tristique porta finibus et, mollis in mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare nunc vitae lorem scelerisque, ac posuere metus tincidunt. Etiam vitae nunc quis lacus tristique scelerisque.'},
  {id: '5', title: 'Director, Client Services', thumbnail: 'https://images.unsplash.com/photo-1520107128464-da450679f704?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=800&w=800&q=60', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices erat et eros hendrerit, et vehicula lorem porta. Quisque vel blandit massa. Integer libero velit, tristique porta finibus et, mollis in mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare nunc vitae lorem scelerisque, ac posuere metus tincidunt. Etiam vitae nunc quis lacus tristique scelerisque.'},
  {id: '6', title: 'VP, Technolgoy', thumbnail: 'https://images.unsplash.com/photo-1532032877540-0793b44545a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=800&w=800&q=60', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices erat et eros hendrerit, et vehicula lorem porta. Quisque vel blandit massa. Integer libero velit, tristique porta finibus et, mollis in mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare nunc vitae lorem scelerisque, ac posuere metus tincidunt. Etiam vitae nunc quis lacus tristique scelerisque.'},
  {id: '7', title: 'VP, Employee Experience', thumbnail: 'https://images.unsplash.com/photo-1531078215167-91fcfe45b39e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=800&w=800&q=60', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices erat et eros hendrerit, et vehicula lorem porta. Quisque vel blandit massa. Integer libero velit, tristique porta finibus et, mollis in mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare nunc vitae lorem scelerisque, ac posuere metus tincidunt. Etiam vitae nunc quis lacus tristique scelerisque.'},
  {id: '8', title: 'Graphic Designer', thumbnail: 'https://images.unsplash.com/photo-1548048876-54a717fa3f8c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=800&w=800&q=60', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices erat et eros hendrerit, et vehicula lorem porta. Quisque vel blandit massa. Integer libero velit, tristique porta finibus et, mollis in mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare nunc vitae lorem scelerisque, ac posuere metus tincidunt. Etiam vitae nunc quis lacus tristique scelerisque.'},
  {id: '9', title: 'Program Director', thumbnail: 'https://images.unsplash.com/photo-1529008338-310c24f458ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=800&w=800&q=60', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices erat et eros hendrerit, et vehicula lorem porta. Quisque vel blandit massa. Integer libero velit, tristique porta finibus et, mollis in mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare nunc vitae lorem scelerisque, ac posuere metus tincidunt. Etiam vitae nunc quis lacus tristique scelerisque.'},
  {id: '10', title: 'Engineer', thumbnail: 'https://images.unsplash.com/photo-1542577065-a97f3868412e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=800&w=800&q=60', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices erat et eros hendrerit, et vehicula lorem porta. Quisque vel blandit massa. Integer libero velit, tristique porta finibus et, mollis in mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare nunc vitae lorem scelerisque, ac posuere metus tincidunt. Etiam vitae nunc quis lacus tristique scelerisque.'},
  {id: '11', title: 'Employee Experience Executive', thumbnail: 'https://images.unsplash.com/photo-1533063392863-a7e43da2afeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=800&w=800&q=60', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices erat et eros hendrerit, et vehicula lorem porta. Quisque vel blandit massa. Integer libero velit, tristique porta finibus et, mollis in mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare nunc vitae lorem scelerisque, ac posuere metus tincidunt. Etiam vitae nunc quis lacus tristique scelerisque.'},
  {id: '12', title: 'Engineer', thumbnail: 'https://images.unsplash.com/photo-1483410859390-6dbb1dc2337d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=800&w=800&q=60', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices erat et eros hendrerit, et vehicula lorem porta. Quisque vel blandit massa. Integer libero velit, tristique porta finibus et, mollis in mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare nunc vitae lorem scelerisque, ac posuere metus tincidunt. Etiam vitae nunc quis lacus tristique scelerisque.'},
  {id: '13', title: 'VP, Creative', thumbnail: 'https://images.unsplash.com/photo-1541805500-0b420aa2d99c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=800&w=800&q=60', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices erat et eros hendrerit, et vehicula lorem porta. Quisque vel blandit massa. Integer libero velit, tristique porta finibus et, mollis in mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare nunc vitae lorem scelerisque, ac posuere metus tincidunt. Etiam vitae nunc quis lacus tristique scelerisque.'},
  {id: '14', title: 'Engineer', thumbnail: 'https://images.unsplash.com/photo-1550274558-e91a7622d3ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=800&w=800&q=60', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices erat et eros hendrerit, et vehicula lorem porta. Quisque vel blandit massa. Integer libero velit, tristique porta finibus et, mollis in mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare nunc vitae lorem scelerisque, ac posuere metus tincidunt. Etiam vitae nunc quis lacus tristique scelerisque.'},
  {id: '15', title: 'General Manager', thumbnail: 'https://images.unsplash.com/photo-1525181737312-adca155347de?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=800&w=800&q=60', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices erat et eros hendrerit, et vehicula lorem porta. Quisque vel blandit massa. Integer libero velit, tristique porta finibus et, mollis in mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare nunc vitae lorem scelerisque, ac posuere metus tincidunt. Etiam vitae nunc quis lacus tristique scelerisque.'},
  {id: '16', title: 'Senior Engineer', thumbnail: 'https://images.unsplash.com/photo-1521248064677-bc8007f357f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=800&w=800&q=60', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices erat et eros hendrerit, et vehicula lorem porta. Quisque vel blandit massa. Integer libero velit, tristique porta finibus et, mollis in mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare nunc vitae lorem scelerisque, ac posuere metus tincidunt. Etiam vitae nunc quis lacus tristique scelerisque.'},
  {id: '17', title: 'Operations Manager', thumbnail: 'https://images.unsplash.com/photo-1525818918160-9ceba31508da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=800&w=800&q=60', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices erat et eros hendrerit, et vehicula lorem porta. Quisque vel blandit massa. Integer libero velit, tristique porta finibus et, mollis in mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare nunc vitae lorem scelerisque, ac posuere metus tincidunt. Etiam vitae nunc quis lacus tristique scelerisque.'},
  {id: '18', title: 'Creative Director', thumbnail: 'https://images.unsplash.com/photo-1535026406642-530e01750ad7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=800&w=800&q=60', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices erat et eros hendrerit, et vehicula lorem porta. Quisque vel blandit massa. Integer libero velit, tristique porta finibus et, mollis in mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare nunc vitae lorem scelerisque, ac posuere metus tincidunt. Etiam vitae nunc quis lacus tristique scelerisque.'},
  {id: '19', title: 'VP, Marketing', thumbnail: 'https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=800&w=800&q=60', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices erat et eros hendrerit, et vehicula lorem porta. Quisque vel blandit massa. Integer libero velit, tristique porta finibus et, mollis in mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare nunc vitae lorem scelerisque, ac posuere metus tincidunt. Etiam vitae nunc quis lacus tristique scelerisque.'},
  {id: '20', title: 'Engineer', thumbnail: 'https://images.unsplash.com/photo-1507331789086-893e9003c0e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=800&w=800&q=60', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices erat et eros hendrerit, et vehicula lorem porta. Quisque vel blandit massa. Integer libero velit, tristique porta finibus et, mollis in mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare nunc vitae lorem scelerisque, ac posuere metus tincidunt. Etiam vitae nunc quis lacus tristique scelerisque.'},
  {id: '21', title: 'COO', thumbnail: 'https://images.unsplash.com/photo-1529688530647-93a6e1916f5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=800&w=800&q=60', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices erat et eros hendrerit, et vehicula lorem porta. Quisque vel blandit massa. Integer libero velit, tristique porta finibus et, mollis in mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare nunc vitae lorem scelerisque, ac posuere metus tincidunt. Etiam vitae nunc quis lacus tristique scelerisque.'},
  {id: '22', title: 'VP, Data and Insights', thumbnail: 'https://images.unsplash.com/photo-1525735765456-7f67273a9d93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=800&w=800&q=60', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices erat et eros hendrerit, et vehicula lorem porta. Quisque vel blandit massa. Integer libero velit, tristique porta finibus et, mollis in mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare nunc vitae lorem scelerisque, ac posuere metus tincidunt. Etiam vitae nunc quis lacus tristique scelerisque.'},
  {id: '23', title: 'Associate Creative Director', thumbnail: 'https://images.unsplash.com/photo-1497948408037-3f93f842fc5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=800&w=800&q=60', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices erat et eros hendrerit, et vehicula lorem porta. Quisque vel blandit massa. Integer libero velit, tristique porta finibus et, mollis in mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare nunc vitae lorem scelerisque, ac posuere metus tincidunt. Etiam vitae nunc quis lacus tristique scelerisque.'},
  {id: '24', title: 'Office Manager', thumbnail: 'https://images.unsplash.com/photo-1481475287693-8dfac615ed88?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=800&w=800&q=60', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices erat et eros hendrerit, et vehicula lorem porta. Quisque vel blandit massa. Integer libero velit, tristique porta finibus et, mollis in mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare nunc vitae lorem scelerisque, ac posuere metus tincidunt. Etiam vitae nunc quis lacus tristique scelerisque.'},
  {id: '25', title: 'Data Engineer', thumbnail: 'https://images.unsplash.com/photo-1529111290557-82f6d5c6cf85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=800&w=800&q=60', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices erat et eros hendrerit, et vehicula lorem porta. Quisque vel blandit massa. Integer libero velit, tristique porta finibus et, mollis in mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare nunc vitae lorem scelerisque, ac posuere metus tincidunt. Etiam vitae nunc quis lacus tristique scelerisque.'},
  {id: '26', title: 'VP, Finance', thumbnail: 'https://images.unsplash.com/photo-1526218769555-7a8cced31a78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=800&w=800&q=60', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices erat et eros hendrerit, et vehicula lorem porta. Quisque vel blandit massa. Integer libero velit, tristique porta finibus et, mollis in mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare nunc vitae lorem scelerisque, ac posuere metus tincidunt. Etiam vitae nunc quis lacus tristique scelerisque.'},
  {id: '27', title: 'Senior Engineer', thumbnail: 'https://images.unsplash.com/photo-1530434673096-63ff8b5de269?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=800&w=800&q=60', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices erat et eros hendrerit, et vehicula lorem porta. Quisque vel blandit massa. Integer libero velit, tristique porta finibus et, mollis in mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare nunc vitae lorem scelerisque, ac posuere metus tincidunt. Etiam vitae nunc quis lacus tristique scelerisque.'},
  {id: '28', title: 'Marketing Associate', thumbnail: 'https://images.unsplash.com/photo-1542727313-4f3e99aa2568?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=800&w=800&q=60', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices erat et eros hendrerit, et vehicula lorem porta. Quisque vel blandit massa. Integer libero velit, tristique porta finibus et, mollis in mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare nunc vitae lorem scelerisque, ac posuere metus tincidunt. Etiam vitae nunc quis lacus tristique scelerisque.'},
  {id: '29', title: 'Senior Engineer', thumbnail: 'https://images.unsplash.com/photo-1514222709107-a180c68d72b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=800&w=800&q=60', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices erat et eros hendrerit, et vehicula lorem porta. Quisque vel blandit massa. Integer libero velit, tristique porta finibus et, mollis in mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare nunc vitae lorem scelerisque, ac posuere metus tincidunt. Etiam vitae nunc quis lacus tristique scelerisque.'},
  {id: '30', title: 'Marketing Director', thumbnail: 'https://images.unsplash.com/photo-1530983822321-fcac2d3c0f06?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=800&w=800&q=60', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices erat et eros hendrerit, et vehicula lorem porta. Quisque vel blandit massa. Integer libero velit, tristique porta finibus et, mollis in mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare nunc vitae lorem scelerisque, ac posuere metus tincidunt. Etiam vitae nunc quis lacus tristique scelerisque.'},
  {id: '31', title: 'Engineer', thumbnail: 'https://images.unsplash.com/photo-1526080652727-5b77f74eacd2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=800&w=800&q=60', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices erat et eros hendrerit, et vehicula lorem porta. Quisque vel blandit massa. Integer libero velit, tristique porta finibus et, mollis in mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare nunc vitae lorem scelerisque, ac posuere metus tincidunt. Etiam vitae nunc quis lacus tristique scelerisque.'},
  {id: '32', title: 'Associate Project Manager', thumbnail: 'https://images.unsplash.com/photo-1541805425-84084e6f922e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=800&w=800&q=60', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices erat et eros hendrerit, et vehicula lorem porta. Quisque vel blandit massa. Integer libero velit, tristique porta finibus et, mollis in mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare nunc vitae lorem scelerisque, ac posuere metus tincidunt. Etiam vitae nunc quis lacus tristique scelerisque.'},
  {id: '33', title: 'Back End Engineer', thumbnail: 'https://images.unsplash.com/photo-1530268729831-4b0b9e170218?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=800&w=800&q=60', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices erat et eros hendrerit, et vehicula lorem porta. Quisque vel blandit massa. Integer libero velit, tristique porta finibus et, mollis in mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare nunc vitae lorem scelerisque, ac posuere metus tincidunt. Etiam vitae nunc quis lacus tristique scelerisque.'},
  {id: '34', title: 'Director, Front-End', thumbnail: 'https://images.unsplash.com/photo-1522872641108-bcb51e2aff69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=800&w=800&q=60', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices erat et eros hendrerit, et vehicula lorem porta. Quisque vel blandit massa. Integer libero velit, tristique porta finibus et, mollis in mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare nunc vitae lorem scelerisque, ac posuere metus tincidunt. Etiam vitae nunc quis lacus tristique scelerisque.'},
  {id: '35', title: 'Director, Design', thumbnail: 'https://images.unsplash.com/photo-1531528329400-a5b98b2c3b83?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=800&w=800&q=60', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices erat et eros hendrerit, et vehicula lorem porta. Quisque vel blandit massa. Integer libero velit, tristique porta finibus et, mollis in mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare nunc vitae lorem scelerisque, ac posuere metus tincidunt. Etiam vitae nunc quis lacus tristique scelerisque.'},
  {id: '36', title: 'Graphic Designer', thumbnail: 'https://images.unsplash.com/photo-1528763380143-65b3ac89a3ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=800&w=800&q=60', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices erat et eros hendrerit, et vehicula lorem porta. Quisque vel blandit massa. Integer libero velit, tristique porta finibus et, mollis in mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare nunc vitae lorem scelerisque, ac posuere metus tincidunt. Etiam vitae nunc quis lacus tristique scelerisque.'},
];

class AboutUs extends Component {

  constructor(props) {
    super(props);
    this.state = {
      heading: 'About Us',
      activeEmployee: employees[0],
      employeePane: employees.slice(0,3),
      employees: employees,
      sliding: false
    };
  }

  setActiveEmployee = (employee) => {
    this.setState({
      employeePane: [employee, this.state.employeePane[0], this.state.employeePane[1]]
    });
  }

  setSlidePane = (value) => {
    this.setState({
      sliding: value
    });
  }

  handleThumbnailClick = (event, employee) => {
    this.setState({
      activeEmployee: employee,
      sliding: true
    })
    this.setActiveEmployee(employee);
  }

  render() {
    return(
      <div className="about-us">

        <h1>{this.state.heading}</h1>

        <Container fluid={true} className="panes">
          <GroupedPane activeEmployee={this.state.activeEmployee} employees={this.state.employeePane} slide={this.state.sliding}/>
        </Container>

        <Container fluid={true} className="thumbnails">

          <Row className="thumbnail-row">
            { this.state.employees.slice(0,12).map(employee => {
              return(
                <Col className="thumbnail-col" xs={6} sm={4} lg={3} xl={1} key={employee.id} onClick={(event) => this.handleThumbnailClick(event, employee)}>
                  <Thumbnail thumbnail={employee.thumbnail} employee={employee} activeEmployee={this.state.activeEmployee.id === employee.id} />
                </Col>
              );
            })}
          </Row>

          <Row className="thumbnail-row">
            { this.state.employees.slice(12, 24).map(employee => {
              return(
                <Col className="thumbnail-col" xs={6} sm={4} lg={3} xl={1}  key={employee.id} onClick={(event) => this.handleThumbnailClick(event, employee)}>
                  <Thumbnail thumbnail={employee.thumbnail} employee={employee}  activeEmployee={this.state.activeEmployee.id === employee.id} />
                </Col>
              );
            })}
          </Row>
          
          <Row className="thumbnail-row">
            { this.state.employees.slice(24,36).map(employee => {
              return(
                <Col className="thumbnail-col" xs={6} sm={4} lg={3} xl={1}  key={employee.id} onClick={(event) => this.handleThumbnailClick(event, employee)}>
                  <Thumbnail thumbnail={employee.thumbnail} employee={employee} activeEmployee={this.state.activeEmployee.id === employee.id} />
                </Col>
              );
            })}
          </Row>
      </Container>

      </div>  
    );
  }
}

export default AboutUs;