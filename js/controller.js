// This code first refers to the module we just created (called 'app').

// Then, it attaches a controller to it (which we are calling 'MainController').

// The controller takes TWO arguments - the first is the name of the controller,
// and the second is a function that describes the behaviour of the controller.

// The controller is where we will put most of our code today.
angular
	.module('app')
    .controller('MainController', MainController);

    function MainController(){
    	var self = this;
			self.imageVisible = true;
			self.toggleImage = toggleImage;
			self.orderNow = orderNow;

    	self.person = {
    		name: "Dear.......?",
				one: "Address first line",
				two: "Address second line",
				town: "Town",
				county: "County",
				postcode: "Post code",
				message: "Message",
				bye: "Lots of love ....x",
				color: "white",
				radius: "",
				photo: "image"


    	}

			function toggleImage() {
					self.imageVisible = !self.imageVisible
			}

			function orderNow(){
				alert('your card has been sent to ' + self.person.name )
			}

    	console.log(self)
    	// Here is where you write all the code that
    	// describes how your controller should work!


    }
