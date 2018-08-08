module.exports = function(grunt) {

    // 1. Вся настройка находится здесь
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
          dist: {
            src: ['client/js/vendors/jquery/jquery.min.js', 'client/js/vendors/**/*.js','client/js/modules/**/*.js','client/js/*.js' ],
            dest: 'static/js/main.js'
          }
        },

        uglify: {
          build: {
            src: 'static/js/main.js',
            dest: 'static/js/main-min.js'
          },
        },

        imagemin: {
          dynamic: {
            files: [{
              expand: true,
              cwd: 'client/images/',
              src: ['**/*.{png,jpg,gif}'],
              dest: 'static/images'
            }]
          }
        },

        copy : {
          fonts : {
            files : [
              {
                expand : true,
                cwd    : 'client/fonts',
                dest   : 'static/fonts',
                src    : ['*.{eot,woff,svg}']
              }
            ]
          }
        },

        sass: {                              // Task
          dist: {                            // Target
            options: {                       // Target options
              style: 'expanded'              // compressed - if want compressed css file
            },
            files: {                         // Dictionary of files
              'static/styles/base.css': 'client/styles/base.scss',       // 'destination': 'source'
              'static/styles/base-ie.css': 'client/styles/base-ie.scss'
            }
          }
        },

        autoprefixer: {
          options: {
            browsers: ['last 2 versions', 'ie 9', 'ie 10', 'ie 11'],
            map : true
          },
          your_target: {
            src : 'static/styles/*.css'
          },
        },

        pug: {
          release: {
            options: {
              data: {
                debug: false
              }
            },
            files: {
              'templates/index.html': 'client/templates/index.pug'
            }
          }
        },

        bower : {
          install : {
            options : {
              targetDir : 'client/js'
            }
          }
        },

        watch: {
         options: {
            livereload: true,
 
         },
          html: {
            files: ['client/templates/*.pug'],
            tasks: ['pug'],
          },
          scripts: {
            files: ['client/**/*.js'],
            tasks: ['concat', 'uglify'],
          },
          img: {
            files: ['client/**/*.{png,jpg,gif}'],
            tasks: ['imagemin'],
          },
          css: {
            files:['client/**/*.scss'],
            tasks: ['sass', 'autoprefixer'],
          },
          fonts: {
            files:['client/**/*.{eot,woff,svg}'],
            tasks: ['copy'],
          }
        },

    });

    // 3. Тут мы указываем Grunt, что хотим использовать этот плагин
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-pug');
    grunt.loadNpmTasks('grunt-bower-task');

    // 4. Указываем, какие задачи выполняются, когда мы вводим «grunt» в терминале
    grunt.registerTask('default', ['bower', 'concat', 'uglify', 'imagemin', 'copy', 'sass', 'autoprefixer', 'pug', 'watch' ]);
};
