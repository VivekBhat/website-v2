function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/about/about.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/about/about.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfileAboutAboutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"section\" id=\"about\">\n  <div class=\"container\">\n    <div class=\"card\" data-aos=\"fade-up\" data-aos-offset=\"10\">\n      <div class=\"row\">\n        <div class=\"col-lg-6 col-md-12\">\n          <div class=\"card-body\">\n            <div class=\"h4 mt-0 title\">About Me</div>\n            <p>Hi I'm <strong>Vivek Bhat</strong>. {{about1}}</p>\n            <p>{{about2}}</p>\n            <p>{{about3}}</p>\n            <p>{{about4}}</p>\n          </div>\n        </div>\n        <div class=\"col-lg-6 col-md-12\">\n          <div class=\"card-body\">\n            <div class=\"h4 mt-0 title\">Basic Information</div>\n            <div class=\"row\">\n              <div class=\"col-sm-4\">\n                <strong class=\"text-uppercase\">Date of Birth:</strong>\n              </div>\n              <div class=\"col-sm-8\">May 17, 1993</div>\n            </div>\n            <div class=\"row mt-3\">\n              <div class=\"col-sm-4\">\n                <strong class=\"text-uppercase\">Email:</strong>\n              </div>\n              <div class=\"col-sm-8\">bhatvivek93@gmail.com</div>\n            </div>\n            <div class=\"row mt-3\">\n              <div class=\"col-sm-4\">\n                <strong class=\"text-uppercase\">Phone:</strong>\n              </div>\n              <div class=\"col-sm-8\">+1 (919) 945-6945</div>\n            </div>\n            <div class=\"row mt-3\">\n              <div class=\"col-sm-4\">\n                <strong class=\"text-uppercase\">Address:</strong>\n              </div>\n              <div class=\"col-sm-8\"> Beaverton, Oregon USA\n              </div>\n            </div>\n            <div class=\"row mt-3\">\n              <div class=\"col-sm-4\">\n                <strong class=\"text-uppercase\">Language:</strong>\n              </div>\n              <div class=\"col-sm-8\">English, Hindi</div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/contact/contact.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/contact/contact.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfileContactContactComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"section\" id=\"contact\">\n        <div class=\"cc-contact-information\" style=\"background-image: url('assets/images/contact.jpg');\">\n          <div class=\"container\">\n            <div class=\"cc-contact\">\n              <div class=\"row\">\n                <div class=\"col-md-9\">\n                  <div class=\"card mb-0\" data-aos=\"zoom-in\">\n                    <div class=\"h4 text-center title\">Contact Me</div>\n                    <div class=\"row\">\n                      <div class=\"col-md-6\">\n                        <div class=\"card-body\">\n                          <form name=\"form\" (ngSubmit)=\"f.form.valid ; f.resetForm()\" #f=\"ngForm\" novalidate>\n                            <div class=\"p pb-3\">\n                              <strong>Feel free to contact me </strong>\n                            </div>\n                            <div class=\"row mb-3\">\n                              <div class=\"col\">\n                                <div class=\"input-group\">\n                                  <span class=\"input-group-addon\">\n                                    <i class=\"fa fa-user-circle\"></i>\n                                  </span>\n                                  <input class=\"form-control\" type=\"text\" name=\"name\" placeholder=\"Name\"\n                                    [(ngModel)]=\"model.name\" #name=\"ngModel\"\n                                    [ngClass]=\"{ 'is-invalid': f.submitted && name.invalid }\" required />\n                                </div>\n                              </div>\n                            </div>\n                            <div class=\"row mb-3\">\n                              <div class=\"col\">\n                                <div class=\"input-group\">\n                                  <span class=\"input-group-addon\">\n                                    <i class=\"fa fa-file-text\"></i>\n                                  </span>\n                                  <input class=\"form-control\" type=\"text\" name=\"subject\" placeholder=\"Subject\"\n                                    [(ngModel)]=\"model.subject\" #subject=\"ngModel\"\n                                    [ngClass]=\"{ 'is-invalid': f.submitted && subject.invalid }\" required />\n                                </div>\n                              </div>\n                            </div>\n                            <div class=\"row mb-3\">\n                              <div class=\"col\">\n                                <div class=\"input-group\">\n                                  <span class=\"input-group-addon\">\n                                    <i class=\"fa fa-envelope\"></i>\n                                  </span>\n                                  <input class=\"form-control\" type=\"text\" name=\"email\" placeholder=\"E-mail\"\n                                    [(ngModel)]=\"model.email\" #email=\"ngModel\"\n                                    [ngClass]=\"{ 'is-invalid': f.submitted && email.invalid }\"\n                                    pattern=\"^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$\" required />\n                                </div>\n                              </div>\n                            </div>\n                            <div class=\"row mb-3\">\n                              <div class=\"col\">\n                                <div class=\"form-group\">\n                                  <textarea class=\"form-control\" name=\"message\" placeholder=\"Your Message\"\n                                    [(ngModel)]=\"model.message\" #message=\"ngModel\"\n                                    [ngClass]=\"{ 'is-invalid': f.submitted && message.invalid }\" required></textarea>\n                                </div>\n                              </div>\n                            </div>\n                            <div class=\"row\">\n                              <div class=\"col\">\n                                <button class=\"btn btn-primary\" type=\"submit\">Send</button>\n                              </div>\n                            </div>\n                          </form>\n                        </div>\n                      </div>\n                      <div class=\"col-md-6\">\n                        <div class=\"card-body\">\n                          <p class=\"mb-0\">\n                            <strong>Phone</strong>\n                          </p>\n                          <p class=\"pb-2\">+1 (919) 945-6947</p>\n                          <p class=\"mb-0\">\n                            <strong>Email</strong>\n                          </p>\n                          <p>bhatvivek93@gmail.com</p>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/education/education.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/education/education.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfileEducationEducationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"section\" id=\"education\">\n  <div class=\"container cc-education\">\n    <div class=\"h4 text-center mb-4 title\">Education</div>\n    <div class=\"card\">\n      <div class=\"row\">\n        <div class=\"col-md-3 bg-primary\" data-aos=\"fade-right\" data-aos-offset=\"50\" data-aos-duration=\"500\">\n          <div class=\"card-body cc-education-header\">\n            <p>Aug 2016 - Dec 2017</p>\n            <h5>Master's Degree</h5>\n            <p>GPA: 3.77/3.0</p>\n          </div>\n        </div>\n        <div class=\"col-md-9\" data-aos=\"fade-left\" data-aos-offset=\"50\" data-aos-duration=\"500\">\n          <div class=\"card-body\">\n            <div class=\"h5\">Masters in Computer Science</div>\n            <h4 class=\"category\">North Carolina State University, NC (USA)</h4>\n            <span><b>Coursework: </b></span>\n            <ul>\n              <li>Design and Analysis of Algorithms (CSC-505)</li>\n              <li>Software Engineering (CSC-510)</li>\n              <li>Object Oriented Design and Development (CSC-517)</li>\n              <li>DevOps (CSC 519)</li>\n              <li>Database Management System (CSC 540)</li>\n              <li>Computer Networks (CSC 570)</li>\n              <li>Software Security (CSC 515)</li>\n              <li>Artificial Intelligence(CSC 520)</li>\n              <li>Computer Graphics (CSC 561)</li>\n              <li>Independent Study(CSC 630)</li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"card\">\n      <div class=\"row\">\n        <div class=\"col-md-3 bg-primary\" data-aos=\"fade-right\" data-aos-offset=\"50\" data-aos-duration=\"500\">\n          <div class=\"card-body cc-education-header\">\n            <p>Aug 2012 - Jun 2016</p>\n            <h5>Bachelor's Degree</h5>\n            <p>GPA: 8.3/10</p>\n          </div>\n        </div>\n        <div class=\"col-md-9\" data-aos=\"fade-left\" data-aos-offset=\"50\" data-aos-duration=\"500\">\n          <div class=\"card-body\">\n            <div class=\"h5\">Bachelor of Technology</div>\n            <h4 class=\"category\">Jamia Millia University, New Delhi (India)\n            </h4>\n            <ul>\n              <li>Bachelors of Technology in Electronics and Communications</li>\n              <li>President of IEEE JMI Chapter, New Delhi India</li>\n              <li>Was awarded IEEE Best Student Award 2016</li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/experience/experience.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/experience/experience.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfileExperienceExperienceComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"section\" id=\"experience\">\n  <div class=\"container cc-education\">\n    <div class=\"h4 text-center mb-4 title\">Work Experience</div>\n    <div class=\"colorlib-narrow-content\">\n\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"timeline-centered\">\n            <!--Oregon Intel-->\n            <article class=\"timeline-entry animate-box\" data-animate-effect=\"fadeInLeft\">\n              <div class=\"timeline-entry-inner\">\n\n                <div class=\"timeline-icon color-1\">\n                  <i class=\"icon-pen2\"></i>\n                </div>\n\n                <div class=\"timeline-label\">\n                  <h3 style=\"margin-bottom: 15px\">Intel Corporations</h3>\n                  <h4 style=\"margin-bottom: 0\">Software Development Engineer</h4>\n                  <div>\n                    Oct 2018 – Present\n                    <br>\n                    Hillsboro, Oregon, USA\n                  </div>\n                  <p></p>\n                  <ul>\n                    <li>Full Stack Web Development.</li>\n                    <li>Owner of Angular 8 based UI for a 3-tier web application.</li>\n                    <li>Productizing an Artificial Intelligence tool for Intel's external customers using Angular 8,\n                      Python Flask and AWS infrastructure.\n                    </li>\n                    <li>Developed AWS Lambda functions to optimize cost and start queueing services for various jobs</li>\n                  </ul>\n                </div>\n              </div>\n            </article>\n\n            <!--Cary Intel-->\n            <article class=\"timeline-entry animate-box\" data-animate-effect=\"fadeInLeft\">\n              <div class=\"timeline-entry-inner\">\n\n                <div class=\"timeline-icon color-2\">\n                  <i class=\"icon-pen2\"></i>\n                </div>\n\n                <div class=\"timeline-label\">\n                  <h3 style=\"margin-bottom: 15px\">Intel Corporations</h3>\n                  <h4 style=\"margin-bottom: 0\">Software Development Engineer</h4>\n                  <div>\n                    Jan 2018 – Oct 2018\n                    <br>\n                    Cary, North Carolina, USA\n                  </div>\n                  <p></p>\n                  <ul>\n                    <li>Created the first automated deployment for Saffron on AWS using Ansible, terraform and bash.\n                    </li>\n                    <li>Architected, developed, implemented and owned the centralized logging system for Intel Saffron\n                      using ELK stack and Filebeats on AWS\n                    </li>\n                    <li>Architected the infrastructure required for various clients using AWS, Azure and GCP.</li>\n                    <li>Orchestrated the fully automated installer for various Intel Saffron services using Docker\n                      swarm, bash and ansible.\n                    </li>\n                  </ul>\n                </div>\n              </div>\n            </article>\n\n            <!--NCSU SDE-->\n            <article class=\"timeline-entry animate-box\" data-animate-effect=\"fadeInLeft\">\n              <div class=\"timeline-entry-inner\">\n\n                <div class=\"timeline-icon color-3\">\n                  <i class=\"icon-pen2\"></i>\n                </div>\n\n                <div class=\"timeline-label\">\n                  <h3 style=\"margin-bottom: 15px\">Center for Integrated Pest Management, NCSU</h3>\n                  <h4 style=\"margin-bottom: 0\">Software Development Engineer Intern</h4>\n                  <div>\n                    Sep 2017 – Dec 2017\n                    <br>\n                    Raleigh, North Carolina, USA\n                  </div>\n                  <p></p>\n                  <ul>\n                    <li>Conversion of a computer program from Netlogo to Java</li>\n                    <li>Develop Java programs based on input from biologists</li>\n                    <li>Improvement of the (web) graphical user interface (GUI) of the program to make it more\n                      responsive,\n                      discoverable and attractive.\n                    </li>\n                  </ul>\n                </div>\n              </div>\n            </article>\n\n            <!--Intel Internship-->\n            <article class=\"timeline-entry animate-box\" data-animate-effect=\"fadeInLeft\">\n              <div class=\"timeline-entry-inner\">\n\n                <div class=\"timeline-icon color-4\">\n                  <i class=\"icon-pen2\"></i>\n                </div>\n\n                <div class=\"timeline-label\">\n                  <h3 style=\"margin-bottom: 15px\">Intel Corporations</h3>\n                  <h4 style=\"margin-bottom: 0\">Software Development Engineer Intern</h4>\n                  <div>\n                    May 2017 – Aug 2017\n                    <br>\n                    Cary, North Carolina, USA\n                  </div>\n                  <p></p>\n                  <ol>\n                    <li> Project 1: Intel Saffron REST Client\n                      <ul>\n                        <li>Developed Intel Saffron’s Java REST tool that encapsulates the unique security protocol and\n                          complex API from scratch\n                        </li>\n                        <li>Earlier, creating one ‘space’ took more than an hour. Now, the customers can create\n                          thousands\n                          of\n                          SMB spaces in less than 5 minutes\n                        </li>\n                        <li>Its intuitive deliverable zip file and heavy documentation guide made SMB REST calls simpler\n                          and\n                          easier for the customer\n                        </li>\n                        <li>Reduced the engineer allocation time from 15.75 hours to 1 hour, 93.65% reduction in time,\n                          hence\n                          our company saved money\n                        </li>\n                      </ul>\n                    </li>\n\n                    <br>\n                    <li> Project 2: AWS Auto-Deployment Client\n                      <ul>\n                        <li>Introduced modern DevOps techniques and improved the deployment of Saffron by using\n                          Intel-AWS\n                          EC2\n                          instances and Ansible\n                        </li>\n                        <li>The conventional procedure to install Saffron was to buy a server (not AWS) and manually ssh\n                          into\n                          it and then set the environments and configure it accordingly.\n                        </li>\n                        <li>This would usually take more than 2 hours and going through cumbersome steps again and\n                          again.\n                        </li>\n                        <li>Now, with just one-step Ansible playbook, we get a new up and running EC2 instance with\n                          Saffron\n                          installed and configured in it.\n                        </li>\n                      </ul>\n                    </li>\n                    <br>\n                    <li>Project 3: Saffron Automated Tool-Setup Client\n                      <ul>\n                        <li>Revamped the conventional deployment strategy of the tool being built for an external\n                          agency\n                        </li>\n                        <li>The new technique deploys an up and running software on top of a Saffron base</li>\n                        <li>Used a combination of Shell scripts, Docker and Ansible to automate the whole process.</li>\n                      </ul>\n                    </li>\n                  </ol>\n                </div>\n              </div>\n            </article>\n\n          </div>\n\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/footer/footer.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/footer/footer.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfileFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<footer class=\"footer\">\n    <div class=\"container text-center\">\n      <!--<a class=\"cc-facebook btn btn-link\" href=\"https://www.facebook.com/mehul.kothari.39\" target=\"_blank\">-->\n        <!--<i class=\"fa fa-facebook fa-2x \" aria-hidden=\"true\"></i>-->\n      <!--</a>-->\n      <a class=\"cc-linkedin btn btn-link\" href=\"https://www.linkedin.com/in/vivek-bhat/\" target=\"_blank\">\n        <i class=\"fa fa-linkedin fa-2x \" aria-hidden=\"true\"></i>\n      </a>\n      <a class=\"cc-instagram btn btn-link\" href=\"https://www.instagram.com/vivek_bhat_/\" target=\"_blank\">\n        <i class=\"fa fa-instagram fa-2x \" aria-hidden=\"true\"></i>\n      </a>\n      <a class=\"cc-twitter btn btn-link \" href=\"https://twitter.com/bhat175\" target=\"_blank\">\n        <i class=\"fa fa-twitter fa-2x \" aria-hidden=\"true\"></i>\n      </a>\n\n      <a class=\"cc-github btn btn-link \" href=\"https://github.com/vivekbhat\" target=\"_blank\">\n        <i class=\"fa fa-github fa-2x \" aria-hidden=\"true\"></i>\n      </a>\n      <!-- <a class=\"cc-google-plus btn btn-link\" href=\"#\" target=\"_blank\">\n        <i class=\"fa fa-google-plus fa-2x\" aria-hidden=\"true\"></i>\n      </a> -->\n    </div>\n    <div class=\"text-center text-muted\">\n      <p>&copy; All rights reserved.\n      </p>\n    </div>\n  </footer>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/header/header.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/header/header.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfileHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<header id=\"home\">\n  <div class=\"profile-page sidebar-collapse\">\n    <nav class=\"navbar navbar-expand-lg fixed-top navbar-transparent bg-primary\" color-on-scroll=\"400\">\n      <div class=\"container\">\n        <div class=\"navbar-translate\">\n          <a class=\"navbar-brand pointer\" (click)=\"onClick('home')\" rel=\"tooltip\">Vivek Bhat</a>\n          <button class=\"navbar-toggler navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navigation\"\n                  aria-controls=\"navigation\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n            <span class=\"navbar-toggler-bar bar1\"></span>\n            <span class=\"navbar-toggler-bar bar2\"></span>\n            <span class=\"navbar-toggler-bar bar3\"></span>\n          </button>\n        </div>\n        <div class=\"collapse navbar-collapse justify-content-end\" id=\"navigation\">\n          <ul class=\"navbar-nav\">\n            <ng-container *ngFor=\"let link of ids\">\n              <li class=\"nav-item\">\n                <a class=\"nav-link pointer smooth-scroll\" (click)=\"onClick(link)\">{{link}}</a>\n              </li>\n            </ng-container>\n          </ul>\n        </div>\n      </div>\n    </nav>\n  </div>\n</header>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/intro/intro.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/intro/intro.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfileIntroIntroComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"profile-page\">\n  <div class=\"wrapper\">\n    <div class=\"page-header page-header-small\" filter-color=\"green\">\n      <div class=\"page-header-image\" data-parallax=\"true\" style=\"background-image: url('../../../assets/images/intro.jpg');\">\n      </div>\n      <div class=\"container\">\n        <div class=\"content-center\">\n          <div class=\"cc-profile-image\">\n            <a href=\"#\">\n              <img src=\"../../../assets/images/img1.JPG\" alt=\"Image\"/>\n            </a>\n          </div>\n          <div class=\"h2 title\">Vivek Bhat</div>\n          <p class=\"category text-white\">Full Stack Web Developer, Intel</p>\n          <a class=\"btn btn-primary smooth-scroll mr-2\" (click)=\"onClick('contact')\" data-aos=\"zoom-in\"\n             data-aos-anchor=\"data-aos-anchor\">Contact Me</a>\n          <a class=\"btn btn-primary\"\n             href=\"../../../assets/resume/Resume_Vivek_Bhat.pdf\" target=\"_blank\"\n             data-aos=\"zoom-in\" data-aos-anchor=\"data-aos-anchor\">Resume</a>\n        </div>\n      </div>\n      <div class=\"section\">\n        <div class=\"container\">\n          <div class=\"button-container\">\n            <!--<a class=\"btn btn-default btn-round btn-lg btn-icon\" href=\"https://www.facebook.com/vivekbhat\"-->\n               <!--target=\"_blank\" rel=\"tooltip\" title=\"Follow me on Facebook\">-->\n              <!--<i class=\"fa fa-facebook\"></i>-->\n            <!--</a>-->\n            <a class=\"btn btn-default btn-round btn-lg btn-icon\" href=\"https://www.instagram.com/vivek_bhat_/\"\n               target=\"_blank\" rel=\"tooltip\" title=\"Follow me on Instagram\">\n              <i class=\"fa fa-instagram\"></i>\n            </a>\n            <a class=\"btn btn-default btn-round btn-lg btn-icon\" href=\"https://www.linkedin.com/in/vivek-bhat/\"\n               target=\"_blank\" rel=\"tooltip\" title=\"Follow me on Linkedin\">\n              <i class=\"fa fa-linkedin\"></i>\n            </a>\n            <a class=\"btn btn-default btn-round btn-lg btn-icon\" href=\"https://github.com/vivekbhat\"\n               target=\"_blank\" rel=\"tooltip\" title=\"Follow me on Github\">\n              <i class=\"fa fa-github\"></i>\n            </a>\n            <a class=\"btn btn-default btn-round btn-lg btn-icon\" href=\"https://twitter.com/bhat175\"\n               target=\"_blank\" rel=\"tooltip\" title=\"Follow me on Twitter\">\n              <i class=\"fa fa-twitter\"></i>\n            </a>\n            <!--<a class=\"btn btn-default btn-round btn-lg btn-icon\" href=\"#\" target=\"_blank\" rel=\"tooltip\"-->\n               <!--title=\"Follow me on Google+\">-->\n              <!--<i class=\"fa fa-google-plus\"></i>-->\n            <!--</a>-->\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/portfolio/portfolio.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/portfolio/portfolio.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfilePortfolioPortfolioComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"section\" id=\"portfolio\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-6 ml-auto mr-auto\">\n          <div class=\"h4 text-center mb-4 title\">Portfolio</div>\n          <div class=\"nav-align-center\">\n            <ul class=\"nav nav-pills nav-pills-primary\" role=\"tablist\">\n              <li class=\"nav-item\">\n                <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#web-development\" role=\"tablist\">\n                  <i class=\"fa fa-laptop\" aria-hidden=\"true\"></i>\n                </a>\n              </li>\n              \n            </ul>\n          </div>\n        </div>\n      </div>\n      <div class=\"tab-content gallery mt-5\">\n        <div class=\"tab-pane active\" id=\"web-development\">\n          <div class=\"ml-auto mr-auto\">\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <div class=\"cc-porfolio-image img-raised\" data-aos=\"fade-up\" data-aos-anchor-placement=\"top-bottom\">\n                  <a href=\"https://personal-portfolio0320.000webhostapp.com/\">\n                    <figure class=\"cc-effect\">\n                      <img src=\"assets/images/portfolio1.PNG\" alt=\"Image\" />\n                      <figcaption>\n                        <div class=\"h4\">Made Using Angular8</div>\n                        <p>Web Development</p>\n                      </figcaption>\n                    </figure>\n                  </a>\n                </div>\n              </div>\n              <div class=\"col-md-6\">\n                <div class=\"cc-porfolio-image img-raised\" data-aos=\"fade-up\" data-aos-anchor-placement=\"top-bottom\">\n                  <a href=\"http://msgc320.pythonanywhere.com/\">\n                    <figure class=\"cc-effect\">\n                      <img src=\"assets/images/portfolio2.PNG\" alt=\"Image\" />\n                      <figcaption>\n                        <div class=\"h4\">Made Using Django</div>\n                        <p>Web Development</p>\n                      </figcaption>\n                    </figure>\n                  </a>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        \n      </div>\n    </div>\n  </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfileProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n<div class=\"page-content\">\n  <app-intro></app-intro>\n  <app-about></app-about>\n  <app-education></app-education>\n  <app-skills></app-skills>\n  <app-experience></app-experience>\n  <app-projects ></app-projects>\n  <app-portfolio></app-portfolio>\n  <app-reference></app-reference>\n  <app-contact></app-contact>\n</div>\n<app-footer></app-footer>\n<ngx-spinner bdColor=\"rgba(255,255,255,1)\" size=\"medium\" color=\"#033d5b\" type=\"ball-spin-clockwise\"></ngx-spinner>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/projects/projects.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/projects/projects.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfileProjectsProjectsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"section\" id=\"projects\">\n  <div class=\"container cc-education\">\n    <div class=\"h4 text-center mb-4 title\">Open Source Projects</div>\n\n    <div class=\"row\">\n\n\n      <div class=\"col-md-4 col-sm-6 animate-box\" data-animate-effect=\"fadeInLeft\">\n        <div class=\"blog-entry\">\n          <div class=\"card\">\n            <img alt=\"Card image\" class=\"card-img-top\" src=\"../../../assets/images/expertiza_1.jpg\" style=\"width:100%\">\n            <div class=\"card-body\">\n              <h4 class=\"card-title\">Expertiza Docker Image</h4>\n              <h5 class=\"card-text\"><b>Technology :</b> Docker, Bash scripts, GitHub</h5>\n              <!--<h5 class=\"card-text\"><a href=\"http://my-personal-portfolio.epizy.com/?i=2\">View my Live Demo</a></h5>-->\n\n              <!--<a (click)=\"onClickSee()\" style=\"color: white\" class=\"btn btn-primary stretched-link ml-2 mr-5\">See-->\n              <!--Project</a>-->\n              <div style=\"text-align: center\">\n                <a class=\"btn btn-primary stretched-link\" href=\"https://github.com/VivekBhat/expertiza\" target=\"_blank\">GithubLink</a>\n              </div>\n\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-md-4 col-sm-6 animate-box\" data-animate-effect=\"fadeInLeft\">\n        <div class=\"blog-entry\">\n          <div class=\"card\">\n            <img alt=\"Card image\" class=\"card-img-top\" src=\"../../../assets/images/expertiza_2.jpg\" style=\"width:100%\">\n            <div class=\"card-body\">\n              <h4 class=\"card-title\">Expertiza Log Visualization</h4>\n              <h5 class=\"card-text\"><b>Technology :</b> Django,Python,Bootstrap3 </h5>\n              <div style=\"text-align: center\">\n                <a class=\"btn btn-primary stretched-link\" href=\"https://github.com/VivekBhat/expertiza\" target=\"_blank\">GithubLink</a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-md-4 col-sm-6 animate-box\" data-animate-effect=\"fadeInLeft\">\n        <div class=\"blog-entry\">\n          <div class=\"card\">\n            <img alt=\"Card image\" class=\"card-img-top\" src=\"../../../assets/images/expertiza_3.jpg\" style=\"width:100%\">\n            <div class=\"card-body\">\n              <h4 class=\"card-title\">Expertiza Wiki Page</h4>\n              <h5 class=\"card-text\"><b>Technology :</b> HTML5,CSS3,JS,MYSQL,PHP </h5>\n              <div style=\"text-align: center\">\n                <a class=\"btn btn-primary stretched-link\" href=\"https://github.com/VivekBhat/expertiza\" target=\"_blank\">GithubLink</a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n    <div class=\"h4 text-center mb-4 title\">Other Projects</div>\n    <div class=\"row\">\n      <div class=\"col-md-4 col-sm-6 animate-box\" data-animate-effect=\"fadeInLeft\">\n        <div class=\"blog-entry\">\n          <div class=\"card\">\n            <img alt=\"Card image\" class=\"card-img-top\" src=\"assets/images/p3.png\" style=\"width:100%\">\n            <div class=\"card-body\">\n              <h4 class=\"card-title\">Movie Success Prediction(Hackathon)</h4>\n              <h5 class=\"card-text\"><b>Technology :</b> Django,Python,ML,DataScience </h5>\n              <h5 class=\"card-text\"><a href=\"https://medium.com/@mehulkothari05/movie-success-prediction-a67d871a7b1\">\n                Read Blog on this Project</a></h5>\n              <a class=\"btn btn-primary stretched-link ml-2 mr-5\"\n                 href=\"https://medium.com/@mehulkothari05/movie-success-prediction-a67d871a7b1\">See Project</a>\n              <a class=\"btn btn-primary stretched-link\"\n                 href=\"https://github.com/mehulk05?tab=repositories\">GithubLink</a>\n            </div>\n          </div>\n        </div>\n      </div>\n\n\n      <div class=\"col-md-4 col-sm-6 animate-box\" data-animate-effect=\"fadeInLeft\">\n        <div class=\"blog-entry\">\n          <div class=\"card\">\n            <img alt=\"Card image\" class=\"card-img-top\" src=\"assets/images/p5.png\" style=\"width:100%\">\n            <div class=\"card-body\">\n              <h4 class=\"card-title\">Smart Baby Stroller(Final Year)</h4>\n              <h5 class=\"card-text\"><b>Technology :</b> Python,Android,Firebase </h5>\n              <h5 class=\"card-text\"><a\n                href=\"https://medium.com/@mehulkothari05/smart-baby-stroller-system-3f6b4f49476a\"> Read Blog on this\n                Project</a></h5>\n              <a class=\"btn btn-primary stretched-link ml-2 mr-5\"\n                 href=\"https://medium.com/@mehulkothari05/smart-baby-stroller-system-3f6b4f49476a\">See Project</a>\n              <a class=\"btn btn-primary stretched-link\"\n                 href=\"https://github.com/mehulk05/Smart-Baby-Stroller-System.git\">GithubLink</a>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-md-4 col-sm-6 animate-box\" data-animate-effect=\"fadeInLeft\">\n        <div class=\"blog-entry\">\n          <div class=\"card\">\n            <img alt=\"Card image\" class=\"card-img-top\" src=\"assets/images/p6.png\" style=\"width:100%\">\n            <div class=\"card-body\">\n              <h4 class=\"card-title\">Simple Chat Application Using Firebase</h4>\n              <h5 class=\"card-text\"><b>Technology :</b> Android,Java,Firebase </h5>\n              <h5 class=\"card-text\"><a\n                href=\"https://code.tutsplus.com/tutorials/how-to-create-an-android-chat-app-using-firebase--cms-27397\">\n                Read Blog on this Project</a></h5>\n              <a class=\"btn btn-primary stretched-link ml-2 mr-5\" href=\"https://github.com/mehulk05?tab=repositories\">See\n                Project</a>\n              <a class=\"btn btn-primary stretched-link\"\n                 href=\"https://github.com/mehulk05?tab=repositories\">GithubLink</a>\n            </div>\n          </div>\n        </div>\n      </div>\n\n\n      <div class=\"col-md-4 col-sm-6 animate-box\" data-animate-effect=\"fadeInLeft\">\n        <div class=\"blog-entry\">\n          <div class=\"card\">\n            <img alt=\"Card image\" class=\"card-img-top\" src=\"assets/images/p8.png\" style=\"width:100%\">\n            <div class=\"card-body\">\n              <h4 class=\"card-title\">Know Your Disease</h4>\n              <h5 class=\"card-text\"><b>Technology :</b> HTML5,CSS3,JS,MYSQL,PHP </h5>\n              <a class=\"btn btn-primary stretched-link ml-2 mr-5\" href=\"https://github.com/mehulk05/Know-Your-Disease\">See\n                Project</a>\n              <a class=\"btn btn-primary stretched-link\"\n                 href=\"https://github.com/mehulk05/Know-Your-Disease\">GithubLink</a>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-md-4 col-sm-6 animate-box\" data-animate-effect=\"fadeInLeft\">\n        <div class=\"blog-entry\">\n          <div class=\"card\">\n            <img alt=\"Card image\" class=\"card-img-top\" src=\"assets/images/p9.png\" style=\"width:100%\">\n            <div class=\"card-body\">\n              <h4 class=\"card-title\">Pizza Ordering System</h4>\n              <h5 class=\"card-text\"><b>Technology :</b> Java,Servlet,JSP,JDBC </h5>\n              <a class=\"btn btn-primary stretched-link ml-2 mr-5\"\n                 href=\"https://github.com/mehulk05/Pizza-Ordering-System\">See Project</a>\n              <a class=\"btn btn-primary stretched-link\" href=\"https://github.com/mehulk05/Pizza-Ordering-System\">GithubLink</a>\n            </div>\n          </div>\n        </div>\n      </div>\n\n\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/reference/reference.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/reference/reference.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfileReferenceReferenceComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"section\" id=\"reference\">\n        <div class=\"container cc-reference\">\n          <div class=\"h4 mb-4 text-center title\">References</div>\n          <div class=\"card\" data-aos=\"zoom-in\">\n            <div class=\"carousel slide\" id=\"cc-Indicators\" data-ride=\"carousel\">\n              <ol class=\"carousel-indicators\">\n                <li class=\"active\" data-target=\"#cc-Indicators\" data-slide-to=\"0\"></li>\n                <li data-target=\"#cc-Indicators\" data-slide-to=\"1\"></li>\n               \n              </ol>\n              <div class=\"carousel-inner\">\n                <div class=\"carousel-item active\">\n                  <div class=\"row\">\n                    <div class=\"col-lg-2 col-md-3 cc-reference-header\">\n                      <img src=\"assets/images/sg.jpg\" alt=\"Image\" />\n                      <div class=\"h5 pt-2\">Sagar Patel</div>\n                      <p class=\"category\">HOD </p>\n                      <p class=\"category\">at ASOIT </p>\n                    </div>\n                    <div class=\"col-lg-10 col-md-9\">\n                    <p>\n                      Mehul is creative, innovative, responsible and quite a rational thinker. \n                    Coding as a way of life, his work presents products with great quality, following standards\n                     and good practices.He completed one of my live project on matrimonial website and \n                     I am so impressed with his techniques.\n                    </p>\n                    <p>He has always been hardworking ,creaive,and absolute genius in his creative criticial thinking \n                      He is always ready to take challege as his new opprotunities.\n                    </p>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"carousel-item\">\n                  <div class=\"row\">\n                    <div class=\"col-lg-2 col-md-3 cc-reference-header\">\n                      <img src=\"assets/images/hn.jpg\" alt=\"Image\" />\n                      <h4>Hetal </h4>\n                      <p class=\"category\">Associate S/W Developer,</p>\n                      <p class=\"category\">at Sygnet</p>\n                    </div>\n                    <div class=\"col-lg-10 col-md-9\">\n                      <p> Mehul is a really good working partner with high knowledge on backend and frontend development , \n                        he is always concerned with going forward never afraid of improving or making use of new technologies, \n                        helping his peers whenever\n                         he is able to and solving problems in a quick and efficient manner with his typical optimism</p>\n\n                         <p>We have worked two years togather in same project ,so i know him from my personal experience\n                           Every person want this guy to be in his team.And as a persona I m sure company wont regret for hiring him\n                         </p>\n                    </div>\n                  </div>\n                </div>\n               \n              </div>\n            </div>\n          </div>\n        </div>\n      </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/skills/skills.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/skills/skills.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfileSkillsSkillsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"section\" id=\"skills\">\n        <div class=\"container\">\n          <div class=\"h4 text-center mb-4 title\">Skills</div>\n          <div class=\"card\" data-aos=\"fade-up\" data-aos-anchor-placement=\"top-bottom\">\n            <div class=\"card-body\">\n              <div class=\"row\">\n                <div class=\"col-md-6\">\n                  <div class=\"progress-container progress-primary\">\n                    <span class=\"progress-badge\">Typescript</span>\n                    <div class=\"progress\">\n                      <div class=\"progress-bar progress-bar-primary\" data-aos=\"progress-full\" data-aos-offset=\"10\"\n                        data-aos-duration=\"2000\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\"\n                        style=\"width: 85%;\"></div>\n                      <span class=\"progress-value\">85%</span>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-md-6\">\n                  <div class=\"progress-container progress-primary\">\n                    <span class=\"progress-badge\">Amazon Web Services</span>\n                    <div class=\"progress\">\n                      <div class=\"progress-bar progress-bar-primary\" data-aos=\"progress-full\" data-aos-offset=\"10\"\n                        data-aos-duration=\"2000\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\"\n                        style=\"width: 80%;\"></div>\n                      <span class=\"progress-value\">80%</span>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-6\">\n                  <div class=\"progress-container progress-primary\">\n                    <span class=\"progress-badge\">Angular</span>\n                    <div class=\"progress\">\n                      <div class=\"progress-bar progress-bar-primary\" data-aos=\"progress-full\" data-aos-offset=\"10\"\n                        data-aos-duration=\"2000\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\"\n                        style=\"width: 80%;\"></div>\n                      <span class=\"progress-value\">80%</span>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-md-6\">\n                  <div class=\"progress-container progress-primary\">\n                    <span class=\"progress-badge\">Java</span>\n                    <div class=\"progress\">\n                      <div class=\"progress-bar progress-bar-primary\" data-aos=\"progress-full\" data-aos-offset=\"10\"\n                        data-aos-duration=\"2000\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\"\n                        style=\"width: 75%;\"></div>\n                      <span class=\"progress-value\">75%</span>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-6\">\n                  <div class=\"progress-container progress-primary\">\n                    <span class=\"progress-badge\">SQL and MYSQL</span>\n                    <div class=\"progress\">\n                      <div class=\"progress-bar progress-bar-primary\" data-aos=\"progress-full\" data-aos-offset=\"10\"\n                        data-aos-duration=\"2000\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\"\n                        style=\"width: 75%;\"></div>\n                      <span class=\"progress-value\">75%</span>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-md-6\">\n                  <div class=\"progress-container progress-primary\">\n                    <span class=\"progress-badge\">HTML,CSS,JS</span>\n                    <div class=\"progress\">\n                      <div class=\"progress-bar progress-bar-primary\" data-aos=\"progress-full\" data-aos-offset=\"10\"\n                        data-aos-duration=\"2000\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\"\n                        style=\"width: 70%;\"></div>\n                      <span class=\"progress-value\">70%</span>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./profile/profile.component */
    "./src/app/profile/profile.component.ts");

    var routes = [{
      path: '',
      component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"],
      pathMatch: 'full'
    }, {
      path: '**',
      redirectTo: ''
    }];
    var routerOptions = {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      scrollOffset: [0, 64]
    };

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, routerOptions)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: '<router-outlet></router-outlet>'
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _profile_profile_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./profile/profile.module */
    "./src/app/profile/profile.module.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
      imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _profile_profile_module__WEBPACK_IMPORTED_MODULE_4__["ProfileModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/profile/about/about.component.scss":
  /*!****************************************************!*\
    !*** ./src/app/profile/about/about.component.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfileAboutAboutComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".row p {\n  font-weight: 700px;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iaGF0dml2ZS9Eb2N1bWVudHMvd2Vic2l0ZS9QZXJzb25hbC1Qb3J0Zm9saW8tQW5ndWxhci1VcGRhdGVkL3NyYy9hcHAvcHJvZmlsZS9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvZmlsZS9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3cgcHtcbiAgICBmb250LXdlaWdodDogNzAwcHg7XG4gICAgY29sb3I6YmxhY2s7XG4gICAgXG59IiwiLnJvdyBwIHtcbiAgZm9udC13ZWlnaHQ6IDcwMHB4O1xuICBjb2xvcjogYmxhY2s7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/profile/about/about.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/profile/about/about.component.ts ***!
    \**************************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppProfileAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AboutComponent = /*#__PURE__*/function () {
      function AboutComponent() {
        _classCallCheck(this, AboutComponent);

        this.about1 = '' + 'I am an AWS Certified Solutions Architect and Developer Associate specializing in three-tier web applications. ';
        this.about2 = 'I have experience with all stages of the development cycle for dynamic web projects, ' + '2.5 years of progressive experience in Angular, HTML, CSS, Typescript developer.' + 'My team works in an Agile environment, possess creative Design Thinking skills and dedicated to work effectively in ' + 'dynamic environments. ';
        this.about3 = 'In my free time I love listening to music, playing soccer, cricket, swimming and hiking.';
        this.about4 = 'Lover of innovation and everything related to generate new knowledge. ' + 'Face problems with a smile and solve them as soon as possible. Very calculated about the time I spend and work I do.\n';
      }

      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutComponent;
    }();

    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-about',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./about.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/about/about.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./about.component.scss */
      "./src/app/profile/about/about.component.scss"))["default"]]
    })], AboutComponent);
    /***/
  },

  /***/
  "./src/app/profile/contact/contact.component.scss":
  /*!********************************************************!*\
    !*** ./src/app/profile/contact/contact.component.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfileContactContactComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/profile/contact/contact.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/profile/contact/contact.component.ts ***!
    \******************************************************/

  /*! exports provided: ContactComponent */

  /***/
  function srcAppProfileContactContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
      return ContactComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ContactComponent = /*#__PURE__*/function () {
      function ContactComponent() {
        _classCallCheck(this, ContactComponent);

        this.model = {};
      }

      _createClass(ContactComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ContactComponent;
    }();

    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-contact',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./contact.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/contact/contact.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./contact.component.scss */
      "./src/app/profile/contact/contact.component.scss"))["default"]]
    })], ContactComponent);
    /***/
  },

  /***/
  "./src/app/profile/education/education.component.scss":
  /*!************************************************************!*\
    !*** ./src/app/profile/education/education.component.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfileEducationEducationComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "h4 {\n  color: #4a4843;\n  font-size: 20px;\n  margin-bottom: 10px;\n  margin-top: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iaGF0dml2ZS9Eb2N1bWVudHMvd2Vic2l0ZS9QZXJzb25hbC1Qb3J0Zm9saW8tQW5ndWxhci1VcGRhdGVkL3NyYy9hcHAvcHJvZmlsZS9lZHVjYXRpb24vZWR1Y2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9maWxlL2VkdWNhdGlvbi9lZHVjYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUM7RUFDRyxjQUFBO0VBQ0osZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ0NBIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9lZHVjYXRpb24vZWR1Y2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiIGg0e1xuICAgIGNvbG9yOiM0YTQ4NDM7XG5mb250LXNpemU6IDIwcHg7XG5tYXJnaW4tYm90dG9tOiAxMHB4O1xubWFyZ2luLXRvcDoycHg7XG59IiwiaDQge1xuICBjb2xvcjogIzRhNDg0MztcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAycHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/profile/education/education.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/profile/education/education.component.ts ***!
    \**********************************************************/

  /*! exports provided: EducationComponent */

  /***/
  function srcAppProfileEducationEducationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EducationComponent", function () {
      return EducationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var EducationComponent = /*#__PURE__*/function () {
      function EducationComponent() {
        _classCallCheck(this, EducationComponent);
      }

      _createClass(EducationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return EducationComponent;
    }();

    EducationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-education',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./education.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/education/education.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./education.component.scss */
      "./src/app/profile/education/education.component.scss"))["default"]]
    })], EducationComponent);
    /***/
  },

  /***/
  "./src/app/profile/experience/experience.component.scss":
  /*!**************************************************************!*\
    !*** ./src/app/profile/experience/experience.component.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfileExperienceExperienceComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".colorlib-experience {\n  padding-top: 4em;\n  padding-bottom: 9em;\n  clear: both;\n  width: 100%;\n  display: block;\n}\n\n@media screen and (max-width: 768px) {\n  .colorlib-experience {\n    padding-top: 5em;\n    padding-bottom: 8em;\n  }\n}\n\n.timeline-centered {\n  position: relative;\n  margin-bottom: 30px;\n}\n\n.timeline-centered:before, .timeline-centered:after {\n  content: \" \";\n  display: table;\n}\n\n.timeline-centered:after {\n  clear: both;\n}\n\n.timeline-centered:before, .timeline-centered:after {\n  content: \" \";\n  display: table;\n}\n\n.timeline-centered:after {\n  clear: both;\n}\n\n.timeline-centered:before {\n  content: \"\";\n  position: absolute;\n  display: block;\n  width: 4px;\n  background: #f2f3f7;\n  top: 20px;\n  bottom: 20px;\n  margin-left: 29px;\n}\n\n.timeline-centered .timeline-entry {\n  position: relative;\n  margin-top: 5px;\n  margin-left: 30px;\n  margin-bottom: 10px;\n  clear: both;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner {\n  position: relative;\n  margin-left: -20px;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon {\n  display: block;\n  width: 40px;\n  height: 40px;\n  background: #2c98f0;\n  border-radius: 50%;\n  text-align: center;\n  box-shadow: 0 0 0 5px #f2f3f7;\n  line-height: 40px;\n  float: left;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon i {\n  color: #fff;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon.color-2 {\n  background: #ec5453;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon.color-3 {\n  background: #f9bf3f;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon.color-4 {\n  background: #a84cb8;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon.color-5 {\n  background: #2fa499;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon.color-none {\n  background: #fff;\n  width: 20px;\n  height: 20px;\n  margin-left: 10px;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-label {\n  position: relative;\n  background: #f2f3f7;\n  padding: 1.5em;\n  margin-left: 60px;\n  -webkit-background-clip: padding-box;\n  -moz-background-clip: padding;\n  background-clip: padding-box;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-label:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 9px 9px 9px 0;\n  border-color: transparent #f2f3f7 transparent transparent;\n  left: 0;\n  top: 10px;\n  margin-left: -9px;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-label p + p {\n  margin-top: 15px;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-label h2 {\n  font-size: 20px;\n  font-family: \"Quicksand\", Arial, sans-serif;\n  font-weight: 500;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-label h2 a {\n  color: #000;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-label h2 span {\n  -webkit-opacity: 0.4;\n  -moz-opacity: 0.4;\n  opacity: 0.4;\n  -ms-filter: alpha(opacity=40);\n  filter: alpha(opacity=40);\n  font-size: 16px;\n}\n\n.timeline-label h4 {\n  margin-top: -15px;\n  font-family: \"Quicksand\", Arial, sans-serif;\n  color: #545755;\n  font-weight: 500;\n}\n\n.timeline-label span {\n  color: #000;\n  font-weight: 600;\n}\n\n.timeline-label p {\n  font-size: 1.3em;\n  font-weight: 500;\n}\n\n.timeline-label ul {\n  font-size: 1.3em;\n  font-weight: 500;\n  font-family: \"Quicksand\", Arial, sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iaGF0dml2ZS9Eb2N1bWVudHMvd2Vic2l0ZS9QZXJzb25hbC1Qb3J0Zm9saW8tQW5ndWxhci1VcGRhdGVkL3NyYy9hcHAvcHJvZmlsZS9leHBlcmllbmNlL2V4cGVyaWVuY2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Byb2ZpbGUvZXhwZXJpZW5jZS9leHBlcmllbmNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUVBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQ0FGOztBREdBO0VBQ0U7SUFDRSxnQkFBQTtJQUNBLG1CQUFBO0VDQUY7QUFDRjs7QURJQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUNGRjs7QURLQTtFQUNFLFlBQUE7RUFDQSxjQUFBO0FDRkY7O0FES0E7RUFDRSxXQUFBO0FDRkY7O0FES0E7RUFDRSxZQUFBO0VBQ0EsY0FBQTtBQ0ZGOztBREtBO0VBQ0UsV0FBQTtBQ0ZGOztBREtBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNGRjs7QURLQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FDRkY7O0FES0E7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FDRkY7O0FES0E7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUlBLGtCQUFBO0VBQ0Esa0JBQUE7RUFHQSw2QkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQ0ZGOztBREtBO0VBQ0UsV0FBQTtBQ0ZGOztBREtBO0VBQ0UsbUJBQUE7QUNGRjs7QURLQTtFQUNFLG1CQUFBO0FDRkY7O0FES0E7RUFDRSxtQkFBQTtBQ0ZGOztBREtBO0VBQ0UsbUJBQUE7QUNGRjs7QURLQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0ZGOztBREtBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLG9DQUFBO0VBQ0EsNkJBQUE7RUFDQSw0QkFBQTtBQ0ZGOztBREtBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLHlEQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtBQ0ZGOztBREtBO0VBQ0UsZ0JBQUE7QUNGRjs7QURLQTtFQUNFLGVBQUE7RUFDQSwyQ0FBQTtFQUNBLGdCQUFBO0FDRkY7O0FES0E7RUFDRSxXQUFBO0FDRkY7O0FES0E7RUFDRSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FDRkY7O0FETUE7RUFFRSxpQkFBQTtFQUNBLDJDQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDSkY7O0FEU0E7RUFFRSxXQUFBO0VBQ0EsZ0JBQUE7QUNQRjs7QURVQTtFQUVFLGdCQUFBO0VBQ0EsZ0JBQUE7QUNSRjs7QURXQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQ0FBQTtBQ1JGIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9leHBlcmllbmNlL2V4cGVyaWVuY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sb3JsaWItZXhwZXJpZW5jZSB7XG4gIHBhZGRpbmctdG9wOiA0ZW07XG4gIHBhZGRpbmctYm90dG9tOiA5ZW07XG5cbiAgY2xlYXI6IGJvdGg7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmNvbG9ybGliLWV4cGVyaWVuY2Uge1xuICAgIHBhZGRpbmctdG9wOiA1ZW07XG4gICAgcGFkZGluZy1ib3R0b206IDhlbTtcbiAgfVxufVxuXG5cbi50aW1lbGluZS1jZW50ZXJlZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLnRpbWVsaW5lLWNlbnRlcmVkOmJlZm9yZSwgLnRpbWVsaW5lLWNlbnRlcmVkOmFmdGVyIHtcbiAgY29udGVudDogXCIgXCI7XG4gIGRpc3BsYXk6IHRhYmxlO1xufVxuXG4udGltZWxpbmUtY2VudGVyZWQ6YWZ0ZXIge1xuICBjbGVhcjogYm90aDtcbn1cblxuLnRpbWVsaW5lLWNlbnRlcmVkOmJlZm9yZSwgLnRpbWVsaW5lLWNlbnRlcmVkOmFmdGVyIHtcbiAgY29udGVudDogXCIgXCI7XG4gIGRpc3BsYXk6IHRhYmxlO1xufVxuXG4udGltZWxpbmUtY2VudGVyZWQ6YWZ0ZXIge1xuICBjbGVhcjogYm90aDtcbn1cblxuLnRpbWVsaW5lLWNlbnRlcmVkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogNHB4O1xuICBiYWNrZ3JvdW5kOiAjZjJmM2Y3O1xuICB0b3A6IDIwcHg7XG4gIGJvdHRvbTogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDI5cHg7XG59XG5cbi50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGNsZWFyOiBib3RoO1xufVxuXG4udGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IC50aW1lbGluZS1lbnRyeS1pbm5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xufVxuXG4udGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IC50aW1lbGluZS1lbnRyeS1pbm5lciAudGltZWxpbmUtaWNvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBiYWNrZ3JvdW5kOiAjMmM5OGYwO1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIC1tcy1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAtbW96LWJveC1zaGFkb3c6IDAgMCAwIDVweCAjZjJmM2Y3O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDVweCAjZjJmM2Y3O1xuICBib3gtc2hhZG93OiAwIDAgMCA1cHggI2YyZjNmNztcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4udGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IC50aW1lbGluZS1lbnRyeS1pbm5lciAudGltZWxpbmUtaWNvbiBpIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkgLnRpbWVsaW5lLWVudHJ5LWlubmVyIC50aW1lbGluZS1pY29uLmNvbG9yLTIge1xuICBiYWNrZ3JvdW5kOiAjZWM1NDUzO1xufVxuXG4udGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IC50aW1lbGluZS1lbnRyeS1pbm5lciAudGltZWxpbmUtaWNvbi5jb2xvci0zIHtcbiAgYmFja2dyb3VuZDogI2Y5YmYzZjtcbn1cblxuLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIgLnRpbWVsaW5lLWljb24uY29sb3ItNCB7XG4gIGJhY2tncm91bmQ6ICNhODRjYjg7XG59XG5cbi50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkgLnRpbWVsaW5lLWVudHJ5LWlubmVyIC50aW1lbGluZS1pY29uLmNvbG9yLTUge1xuICBiYWNrZ3JvdW5kOiAjMmZhNDk5O1xufVxuXG4udGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IC50aW1lbGluZS1lbnRyeS1pbm5lciAudGltZWxpbmUtaWNvbi5jb2xvci1ub25lIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkgLnRpbWVsaW5lLWVudHJ5LWlubmVyIC50aW1lbGluZS1sYWJlbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogI2YyZjNmNztcbiAgcGFkZGluZzogMS41ZW07XG4gIG1hcmdpbi1sZWZ0OiA2MHB4O1xuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gIC1tb3otYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nO1xuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xufVxuXG4udGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IC50aW1lbGluZS1lbnRyeS1pbm5lciAudGltZWxpbmUtbGFiZWw6YWZ0ZXIge1xuICBjb250ZW50OiAnJztcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiA5cHggOXB4IDlweCAwO1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICNmMmYzZjcgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IC05cHg7XG59XG5cbi50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkgLnRpbWVsaW5lLWVudHJ5LWlubmVyIC50aW1lbGluZS1sYWJlbCBwICsgcCB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkgLnRpbWVsaW5lLWVudHJ5LWlubmVyIC50aW1lbGluZS1sYWJlbCBoMiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwiUXVpY2tzYW5kXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4udGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IC50aW1lbGluZS1lbnRyeS1pbm5lciAudGltZWxpbmUtbGFiZWwgaDIgYSB7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG4udGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IC50aW1lbGluZS1lbnRyeS1pbm5lciAudGltZWxpbmUtbGFiZWwgaDIgc3BhbiB7XG4gIC13ZWJraXQtb3BhY2l0eTogLjQ7XG4gIC1tb3otb3BhY2l0eTogLjQ7XG4gIG9wYWNpdHk6IC40O1xuICAtbXMtZmlsdGVyOiBhbHBoYShvcGFjaXR5PTQwKTtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTQwKTtcbiAgZm9udC1zaXplOiAxNnB4O1xuXG59XG5cbi50aW1lbGluZS1sYWJlbCBoNCB7XG5cbiAgbWFyZ2luLXRvcDogLTE1cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZFwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICM1NDU3NTU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG5cblxufVxuXG4udGltZWxpbmUtbGFiZWwgc3BhbiB7XG5cbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi50aW1lbGluZS1sYWJlbCBwIHtcblxuICBmb250LXNpemU6IDEuM2VtO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4udGltZWxpbmUtbGFiZWwgdWwge1xuICBmb250LXNpemU6IDEuM2VtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LWZhbWlseTogXCJRdWlja3NhbmRcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG59XG4iLCIuY29sb3JsaWItZXhwZXJpZW5jZSB7XG4gIHBhZGRpbmctdG9wOiA0ZW07XG4gIHBhZGRpbmctYm90dG9tOiA5ZW07XG4gIGNsZWFyOiBib3RoO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jb2xvcmxpYi1leHBlcmllbmNlIHtcbiAgICBwYWRkaW5nLXRvcDogNWVtO1xuICAgIHBhZGRpbmctYm90dG9tOiA4ZW07XG4gIH1cbn1cbi50aW1lbGluZS1jZW50ZXJlZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLnRpbWVsaW5lLWNlbnRlcmVkOmJlZm9yZSwgLnRpbWVsaW5lLWNlbnRlcmVkOmFmdGVyIHtcbiAgY29udGVudDogXCIgXCI7XG4gIGRpc3BsYXk6IHRhYmxlO1xufVxuXG4udGltZWxpbmUtY2VudGVyZWQ6YWZ0ZXIge1xuICBjbGVhcjogYm90aDtcbn1cblxuLnRpbWVsaW5lLWNlbnRlcmVkOmJlZm9yZSwgLnRpbWVsaW5lLWNlbnRlcmVkOmFmdGVyIHtcbiAgY29udGVudDogXCIgXCI7XG4gIGRpc3BsYXk6IHRhYmxlO1xufVxuXG4udGltZWxpbmUtY2VudGVyZWQ6YWZ0ZXIge1xuICBjbGVhcjogYm90aDtcbn1cblxuLnRpbWVsaW5lLWNlbnRlcmVkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA0cHg7XG4gIGJhY2tncm91bmQ6ICNmMmYzZjc7XG4gIHRvcDogMjBweDtcbiAgYm90dG9tOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogMjlweDtcbn1cblxuLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tbGVmdDogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgY2xlYXI6IGJvdGg7XG59XG5cbi50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkgLnRpbWVsaW5lLWVudHJ5LWlubmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tbGVmdDogLTIwcHg7XG59XG5cbi50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkgLnRpbWVsaW5lLWVudHJ5LWlubmVyIC50aW1lbGluZS1pY29uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJhY2tncm91bmQ6ICMyYzk4ZjA7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLW1zLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC1tb3otYm94LXNoYWRvdzogMCAwIDAgNXB4ICNmMmYzZjc7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgNXB4ICNmMmYzZjc7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDVweCAjZjJmM2Y3O1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkgLnRpbWVsaW5lLWVudHJ5LWlubmVyIC50aW1lbGluZS1pY29uIGkge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIgLnRpbWVsaW5lLWljb24uY29sb3ItMiB7XG4gIGJhY2tncm91bmQ6ICNlYzU0NTM7XG59XG5cbi50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkgLnRpbWVsaW5lLWVudHJ5LWlubmVyIC50aW1lbGluZS1pY29uLmNvbG9yLTMge1xuICBiYWNrZ3JvdW5kOiAjZjliZjNmO1xufVxuXG4udGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IC50aW1lbGluZS1lbnRyeS1pbm5lciAudGltZWxpbmUtaWNvbi5jb2xvci00IHtcbiAgYmFja2dyb3VuZDogI2E4NGNiODtcbn1cblxuLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIgLnRpbWVsaW5lLWljb24uY29sb3ItNSB7XG4gIGJhY2tncm91bmQ6ICMyZmE0OTk7XG59XG5cbi50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkgLnRpbWVsaW5lLWVudHJ5LWlubmVyIC50aW1lbGluZS1pY29uLmNvbG9yLW5vbmUge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIgLnRpbWVsaW5lLWxhYmVsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiAjZjJmM2Y3O1xuICBwYWRkaW5nOiAxLjVlbTtcbiAgbWFyZ2luLWxlZnQ6IDYwcHg7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgLW1vei1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmc7XG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG59XG5cbi50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkgLnRpbWVsaW5lLWVudHJ5LWlubmVyIC50aW1lbGluZS1sYWJlbDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogOXB4IDlweCA5cHggMDtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAjZjJmM2Y3IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xuICBsZWZ0OiAwO1xuICB0b3A6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAtOXB4O1xufVxuXG4udGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IC50aW1lbGluZS1lbnRyeS1pbm5lciAudGltZWxpbmUtbGFiZWwgcCArIHAge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4udGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IC50aW1lbGluZS1lbnRyeS1pbm5lciAudGltZWxpbmUtbGFiZWwgaDIge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZFwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIgLnRpbWVsaW5lLWxhYmVsIGgyIGEge1xuICBjb2xvcjogIzAwMDtcbn1cblxuLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIgLnRpbWVsaW5lLWxhYmVsIGgyIHNwYW4ge1xuICAtd2Via2l0LW9wYWNpdHk6IDAuNDtcbiAgLW1vei1vcGFjaXR5OiAwLjQ7XG4gIG9wYWNpdHk6IDAuNDtcbiAgLW1zLWZpbHRlcjogYWxwaGEob3BhY2l0eT00MCk7XG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT00MCk7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLnRpbWVsaW5lLWxhYmVsIGg0IHtcbiAgbWFyZ2luLXRvcDogLTE1cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZFwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICM1NDU3NTU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi50aW1lbGluZS1sYWJlbCBzcGFuIHtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi50aW1lbGluZS1sYWJlbCBwIHtcbiAgZm9udC1zaXplOiAxLjNlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnRpbWVsaW5lLWxhYmVsIHVsIHtcbiAgZm9udC1zaXplOiAxLjNlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1mYW1pbHk6IFwiUXVpY2tzYW5kXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/profile/experience/experience.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/profile/experience/experience.component.ts ***!
    \************************************************************/

  /*! exports provided: ExperienceComponent */

  /***/
  function srcAppProfileExperienceExperienceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function () {
      return ExperienceComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ExperienceComponent = /*#__PURE__*/function () {
      function ExperienceComponent() {
        _classCallCheck(this, ExperienceComponent);
      }

      _createClass(ExperienceComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ExperienceComponent;
    }();

    ExperienceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-experience',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./experience.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/experience/experience.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./experience.component.scss */
      "./src/app/profile/experience/experience.component.scss"))["default"]]
    })], ExperienceComponent);
    /***/
  },

  /***/
  "./src/app/profile/footer/footer.component.scss":
  /*!******************************************************!*\
    !*** ./src/app/profile/footer/footer.component.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfileFooterFooterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/profile/footer/footer.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/profile/footer/footer.component.ts ***!
    \****************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppProfileFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/footer/footer.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.scss */
      "./src/app/profile/footer/footer.component.scss"))["default"]]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/profile/header/header.component.scss":
  /*!******************************************************!*\
    !*** ./src/app/profile/header/header.component.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfileHeaderHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".pointer {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iaGF0dml2ZS9Eb2N1bWVudHMvd2Vic2l0ZS9QZXJzb25hbC1Qb3J0Zm9saW8tQW5ndWxhci1VcGRhdGVkL3NyYy9hcHAvcHJvZmlsZS9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9maWxlL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucG9pbnRlciB7XG4gIGN1cnNvcjogcG9pbnRlclxufVxuIiwiLnBvaW50ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/profile/header/header.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/profile/header/header.component.ts ***!
    \****************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppProfileHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(location) {
        _classCallCheck(this, HeaderComponent);

        this.location = location;
        this.ids = ['about', 'education', 'skills', 'experience', 'projects', 'resume', 'reference', 'contact'];
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onClick",
        value: function onClick(id) {
          if (id === 'resume') {
            window.open('../../../assets/resume/Resume_Vivek_Bhat.pdf', '_blank');
          } else {
            id = '#' + id;
            var element = document.querySelector(id);

            if (element) {
              this.location.replaceState(id);
              element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              });
            }
          }
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ctorParameters = function () {
      return [{
        type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]
      }];
    };

    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/header/header.component.html"))["default"],
      providers: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], {
        provide: _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"],
        useClass: _angular_common__WEBPACK_IMPORTED_MODULE_2__["PathLocationStrategy"]
      }],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.scss */
      "./src/app/profile/header/header.component.scss"))["default"]]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/profile/intro/intro.component.scss":
  /*!****************************************************!*\
    !*** ./src/app/profile/intro/intro.component.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfileIntroIntroComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvaW50cm8vaW50cm8uY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/profile/intro/intro.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/profile/intro/intro.component.ts ***!
    \**************************************************/

  /*! exports provided: IntroComponent */

  /***/
  function srcAppProfileIntroIntroComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IntroComponent", function () {
      return IntroComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var IntroComponent = /*#__PURE__*/function () {
      function IntroComponent(location) {
        _classCallCheck(this, IntroComponent);

        this.location = location;
      }

      _createClass(IntroComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onClick",
        value: function onClick(id) {
          id = '#' + id;
          var element = document.querySelector(id);

          if (element) {
            this.location.replaceState(id);
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }
      }]);

      return IntroComponent;
    }();

    IntroComponent.ctorParameters = function () {
      return [{
        type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]
      }];
    };

    IntroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-intro',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./intro.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/intro/intro.component.html"))["default"],
      providers: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], {
        provide: _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"],
        useClass: _angular_common__WEBPACK_IMPORTED_MODULE_2__["PathLocationStrategy"]
      }],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./intro.component.scss */
      "./src/app/profile/intro/intro.component.scss"))["default"]]
    })], IntroComponent);
    /***/
  },

  /***/
  "./src/app/profile/portfolio/portfolio.component.scss":
  /*!************************************************************!*\
    !*** ./src/app/profile/portfolio/portfolio.component.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfilePortfolioPortfolioComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcG9ydGZvbGlvL3BvcnRmb2xpby5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/profile/portfolio/portfolio.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/profile/portfolio/portfolio.component.ts ***!
    \**********************************************************/

  /*! exports provided: PortfolioComponent */

  /***/
  function srcAppProfilePortfolioPortfolioComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function () {
      return PortfolioComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PortfolioComponent = /*#__PURE__*/function () {
      function PortfolioComponent() {
        _classCallCheck(this, PortfolioComponent);
      }

      _createClass(PortfolioComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PortfolioComponent;
    }();

    PortfolioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-portfolio',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./portfolio.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/portfolio/portfolio.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./portfolio.component.scss */
      "./src/app/profile/portfolio/portfolio.component.scss"))["default"]]
    })], PortfolioComponent);
    /***/
  },

  /***/
  "./src/app/profile/profile.component.scss":
  /*!************************************************!*\
    !*** ./src/app/profile/profile.component.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfileProfileComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/profile/profile.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/profile/profile.component.ts ***!
    \**********************************************/

  /*! exports provided: ProfileComponent */

  /***/
  function srcAppProfileProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
      return ProfileComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ProfileComponent = /*#__PURE__*/function () {
      function ProfileComponent() {// private spinner: NgxSpinnerService

        _classCallCheck(this, ProfileComponent);
      }

      _createClass(ProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {// this.spinner.show().then(() => {
          //   setTimeout(() => {
          //     this.spinner.hide();
          //   }, 500);
          // });
        }
      }]);

      return ProfileComponent;
    }();

    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./profile.component.scss */
      "./src/app/profile/profile.component.scss"))["default"]]
    })], ProfileComponent);
    /***/
  },

  /***/
  "./src/app/profile/profile.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/profile/profile.module.ts ***!
    \*******************************************/

  /*! exports provided: ProfileModule */

  /***/
  function srcAppProfileProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileModule", function () {
      return ProfileModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var ng_snotify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ng-snotify */
    "./node_modules/ng-snotify/index.js");
    /* harmony import */


    var _profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./profile.component */
    "./src/app/profile/profile.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/profile/header/header.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/profile/footer/footer.component.ts");
    /* harmony import */


    var _intro_intro_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./intro/intro.component */
    "./src/app/profile/intro/intro.component.ts");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./about/about.component */
    "./src/app/profile/about/about.component.ts");
    /* harmony import */


    var _skills_skills_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./skills/skills.component */
    "./src/app/profile/skills/skills.component.ts");
    /* harmony import */


    var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./portfolio/portfolio.component */
    "./src/app/profile/portfolio/portfolio.component.ts");
    /* harmony import */


    var _experience_experience_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./experience/experience.component */
    "./src/app/profile/experience/experience.component.ts");
    /* harmony import */


    var _education_education_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./education/education.component */
    "./src/app/profile/education/education.component.ts");
    /* harmony import */


    var _reference_reference_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./reference/reference.component */
    "./src/app/profile/reference/reference.component.ts");
    /* harmony import */


    var _contact_contact_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./contact/contact.component */
    "./src/app/profile/contact/contact.component.ts");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
    /* harmony import */


    var _projects_projects_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./projects/projects.component */
    "./src/app/profile/projects/projects.component.ts");

    var ProfileModule = function ProfileModule() {
      _classCallCheck(this, ProfileModule);
    };

    ProfileModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], ng_snotify__WEBPACK_IMPORTED_MODULE_4__["SnotifyModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_16__["NgxSpinnerModule"]],
      declarations: [_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], _intro_intro_component__WEBPACK_IMPORTED_MODULE_8__["IntroComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"], _skills_skills_component__WEBPACK_IMPORTED_MODULE_10__["SkillsComponent"], _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_11__["PortfolioComponent"], _experience_experience_component__WEBPACK_IMPORTED_MODULE_12__["ExperienceComponent"], _education_education_component__WEBPACK_IMPORTED_MODULE_13__["EducationComponent"], _reference_reference_component__WEBPACK_IMPORTED_MODULE_14__["ReferenceComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_15__["ContactComponent"], _projects_projects_component__WEBPACK_IMPORTED_MODULE_17__["ProjectsComponent"]],
      providers: [{
        provide: 'SnotifyToastConfig',
        useValue: ng_snotify__WEBPACK_IMPORTED_MODULE_4__["ToastDefaults"]
      }, ng_snotify__WEBPACK_IMPORTED_MODULE_4__["SnotifyService"]]
    })], ProfileModule);
    /***/
  },

  /***/
  "./src/app/profile/projects/projects.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/profile/projects/projects.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfileProjectsProjectsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".blog-entry {\n  width: 100%;\n  float: left;\n  background: #fff;\n  margin-bottom: 3em;\n}\n\n@media screen and (max-width: 768px) {\n  .blog-entry {\n    margin-bottom: 3em;\n  }\n}\n\n.blog-entry .blog-img {\n  width: 100%;\n  float: left;\n  overflow: hidden;\n  position: relative;\n  z-index: 1;\n  margin-bottom: 25px;\n}\n\n.blog-entry .blog-img img {\n  position: relative;\n  max-width: 100%;\n  transform: scale(1);\n  transition: 0.3s;\n}\n\n.blog-entry .desc h3 {\n  font-size: 16px;\n  margin-bottom: 25px;\n  line-height: auto;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  font-family: \"Quicksand\", Arial, sans-serif;\n}\n\n.blog-entry .desc h3 a {\n  color: #000;\n  text-decoration: none;\n}\n\n.blog-entry .desc span {\n  display: block;\n  margin-bottom: 20px;\n  font-size: 12px;\n  color: rgba(0, 0, 0, 0.4) !important;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  font-weight: 700;\n}\n\n.blog-entry .desc span small i {\n  color: #999999;\n}\n\n.blog-entry .desc .lead {\n  font-size: 12px;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  color: #000;\n}\n\n.blog-entry:hover .blog-img img {\n  transform: scale(1.1);\n}\n\n.blog-entry h4 {\n  font-weight: 560;\n  margin-top: 8px;\n  font-size: 20px;\n}\n\n.blog-entry h5 {\n  line-height: normal;\n  font-weight: 500;\n  font-size: 1.3em;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iaGF0dml2ZS9Eb2N1bWVudHMvd2Vic2l0ZS9QZXJzb25hbC1Qb3J0Zm9saW8tQW5ndWxhci1VcGRhdGVkL3NyYy9hcHAvcHJvZmlsZS9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvZmlsZS9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0U7SUFDRSxrQkFBQTtFQ0NGO0FBQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUNBRjs7QURHQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUtBLG1CQUFBO0VBR0EsZ0JBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkNBQUE7QUNBRjs7QURHQTtFQUNFLFdBQUE7RUFDQSxxQkFBQTtBQ0FGOztBREdBO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLG9DQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDQUY7O0FER0E7RUFDRSxjQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUNBRjs7QURHQTtFQUtFLHFCQUFBO0FDQUY7O0FER0E7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDQUY7O0FER0E7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJsb2ctZW50cnkge1xuICB3aWR0aDogMTAwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIG1hcmdpbi1ib3R0b206IDNlbTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmJsb2ctZW50cnkge1xuICAgIG1hcmdpbi1ib3R0b206IDNlbTtcbiAgfVxufVxuXG4uYmxvZy1lbnRyeSAuYmxvZy1pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cblxuLmJsb2ctZW50cnkgLmJsb2ctaW1nIGltZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIC1vLXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4zcztcbiAgLW8tdHJhbnNpdGlvbjogMC4zcztcbiAgdHJhbnNpdGlvbjogMC4zcztcbn1cblxuLmJsb2ctZW50cnkgLmRlc2MgaDMge1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gIGxpbmUtaGVpZ2h0OiBhdXRvO1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBmb250LWZhbWlseTogXCJRdWlja3NhbmRcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG59XG5cbi5ibG9nLWVudHJ5IC5kZXNjIGgzIGEge1xuICBjb2xvcjogIzAwMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uYmxvZy1lbnRyeSAuZGVzYyBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KSAhaW1wb3J0YW50O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uYmxvZy1lbnRyeSAuZGVzYyBzcGFuIHNtYWxsIGkge1xuICBjb2xvcjogIzk5OTk5OTtcbn1cblxuLmJsb2ctZW50cnkgLmRlc2MgLmxlYWQge1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG4uYmxvZy1lbnRyeTpob3ZlciAuYmxvZy1pbWcgaW1nIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAtby10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn1cblxuLmJsb2ctZW50cnkgaDQge1xuICBmb250LXdlaWdodDogNTYwO1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmJsb2ctZW50cnkgaDUge1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDEuM2VtO1xuICBjb2xvcjogYmxhY2tcblxufVxuIiwiLmJsb2ctZW50cnkge1xuICB3aWR0aDogMTAwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIG1hcmdpbi1ib3R0b206IDNlbTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmJsb2ctZW50cnkge1xuICAgIG1hcmdpbi1ib3R0b206IDNlbTtcbiAgfVxufVxuLmJsb2ctZW50cnkgLmJsb2ctaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsb2F0OiBsZWZ0O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5cbi5ibG9nLWVudHJ5IC5ibG9nLWltZyBpbWcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAtby10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuM3M7XG4gIC1vLXRyYW5zaXRpb246IDAuM3M7XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG5cbi5ibG9nLWVudHJ5IC5kZXNjIGgzIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICBsaW5lLWhlaWdodDogYXV0bztcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgZm9udC1mYW1pbHk6IFwiUXVpY2tzYW5kXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xufVxuXG4uYmxvZy1lbnRyeSAuZGVzYyBoMyBhIHtcbiAgY29sb3I6ICMwMDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmJsb2ctZW50cnkgLmRlc2Mgc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCkgIWltcG9ydGFudDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmJsb2ctZW50cnkgLmRlc2Mgc3BhbiBzbWFsbCBpIHtcbiAgY29sb3I6ICM5OTk5OTk7XG59XG5cbi5ibG9nLWVudHJ5IC5kZXNjIC5sZWFkIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBjb2xvcjogIzAwMDtcbn1cblxuLmJsb2ctZW50cnk6aG92ZXIgLmJsb2ctaW1nIGltZyB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG5cbi5ibG9nLWVudHJ5IGg0IHtcbiAgZm9udC13ZWlnaHQ6IDU2MDtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5ibG9nLWVudHJ5IGg1IHtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxLjNlbTtcbiAgY29sb3I6IGJsYWNrO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/profile/projects/projects.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/profile/projects/projects.component.ts ***!
    \********************************************************/

  /*! exports provided: ProjectsComponent */

  /***/
  function srcAppProfileProjectsProjectsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function () {
      return ProjectsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ProjectsComponent = /*#__PURE__*/function () {
      function ProjectsComponent() {
        _classCallCheck(this, ProjectsComponent);
      }

      _createClass(ProjectsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProjectsComponent;
    }();

    ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-projects',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./projects.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/projects/projects.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./projects.component.scss */
      "./src/app/profile/projects/projects.component.scss"))["default"]]
    })], ProjectsComponent);
    /***/
  },

  /***/
  "./src/app/profile/reference/reference.component.scss":
  /*!************************************************************!*\
    !*** ./src/app/profile/reference/reference.component.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfileReferenceReferenceComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".cc-reference p {\n  font-weight: 1000px;\n  color: black;\n  font-style: bold;\n}\n\n.category p {\n  width: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iaGF0dml2ZS9Eb2N1bWVudHMvd2Vic2l0ZS9QZXJzb25hbC1Qb3J0Zm9saW8tQW5ndWxhci1VcGRhdGVkL3NyYy9hcHAvcHJvZmlsZS9yZWZlcmVuY2UvcmVmZXJlbmNlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9maWxlL3JlZmVyZW5jZS9yZWZlcmVuY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVFO0VBQ0ksVUFBQTtBQ0NOIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9yZWZlcmVuY2UvcmVmZXJlbmNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNjLXJlZmVyZW5jZSBwe1xuICAgIGZvbnQtd2VpZ2h0OiAxMDAwcHg7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtc3R5bGU6IGJvbGQ7XG4gIH1cblxuICAuY2F0ZWdvcnkgcHtcbiAgICAgIHdpZHRoOiAxMCVcbiAgfSIsIi5jYy1yZWZlcmVuY2UgcCB7XG4gIGZvbnQtd2VpZ2h0OiAxMDAwcHg7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zdHlsZTogYm9sZDtcbn1cblxuLmNhdGVnb3J5IHAge1xuICB3aWR0aDogMTAlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/profile/reference/reference.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/profile/reference/reference.component.ts ***!
    \**********************************************************/

  /*! exports provided: ReferenceComponent */

  /***/
  function srcAppProfileReferenceReferenceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReferenceComponent", function () {
      return ReferenceComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ReferenceComponent = /*#__PURE__*/function () {
      function ReferenceComponent() {
        _classCallCheck(this, ReferenceComponent);
      }

      _createClass(ReferenceComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ReferenceComponent;
    }();

    ReferenceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-reference',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./reference.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/reference/reference.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./reference.component.scss */
      "./src/app/profile/reference/reference.component.scss"))["default"]]
    })], ReferenceComponent);
    /***/
  },

  /***/
  "./src/app/profile/skills/skills.component.scss":
  /*!******************************************************!*\
    !*** ./src/app/profile/skills/skills.component.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfileSkillsSkillsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvc2tpbGxzL3NraWxscy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/profile/skills/skills.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/profile/skills/skills.component.ts ***!
    \****************************************************/

  /*! exports provided: SkillsComponent */

  /***/
  function srcAppProfileSkillsSkillsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SkillsComponent", function () {
      return SkillsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SkillsComponent = /*#__PURE__*/function () {
      function SkillsComponent() {
        _classCallCheck(this, SkillsComponent);
      }

      _createClass(SkillsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SkillsComponent;
    }();

    SkillsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-skills',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./skills.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/skills/skills.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./skills.component.scss */
      "./src/app/profile/skills/skills.component.scss"))["default"]]
    })], SkillsComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var ng_snotify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ng-snotify */
    "./node_modules/ng-snotify/index.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      //baseUrl : `${window.location.protocol}//${window.location.hostname}/portfolio/`,
      //baseUrl : `http://localhost:4200/`,
      snotifyConfig: {
        showProgressBar: true,
        position: ng_snotify__WEBPACK_IMPORTED_MODULE_1__["SnotifyPosition"].rightTop
      }
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/bhatvive/Documents/website/Personal-Portfolio-Angular-Updated/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map