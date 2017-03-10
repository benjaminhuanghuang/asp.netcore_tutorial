var Greeter = (function () {
    function Greeter(message) {
        this.message = message;
    }
    Greeter.prototype.sayHello = function () {
        console.log("hello " + this.message);
    };
    Object.defineProperty(Greeter.prototype, "greetingMessage", {
        get: function () {
            return "hello " + this.message;
        },
        enumerable: true,
        configurable: true
    });
    return Greeter;
}());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JlZXRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvaGh1YW5nL0RvY3VtZW50cy9CZW4vX0JlbkdpdGh1Yi9hc3AubmV0Y29yZV90dXRvcmlhbC9wYXJ0Mi9tb2Rlcm4vc3JjL2FwcC8iLCJzb3VyY2VzIjpbImdyZWV0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBb0IsT0FBYztRQUFkLFlBQU8sR0FBUCxPQUFPLENBQU87SUFFbEMsQ0FBQztJQUVELDBCQUFRLEdBQVI7UUFFSSxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVMsSUFBSSxDQUFDLE9BQVMsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCxzQkFBSSxvQ0FBZTthQUFuQjtZQUNJLE1BQU0sQ0FBQyxXQUFTLElBQUksQ0FBQyxPQUFTLENBQUM7UUFDbkMsQ0FBQzs7O09BQUE7SUFDTCxjQUFDO0FBQUQsQ0FBQyxBQWJELElBYUMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBHcmVldGVye1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbWVzc2FnZTpzdHJpbmcpXG4gICAge1xuICAgIH1cblxuICAgIHNheUhlbGxvKClcbiAgICB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBoZWxsbyAke3RoaXMubWVzc2FnZX1gKTtcbiAgICB9XG5cbiAgICBnZXQgZ3JlZXRpbmdNZXNzYWdlKCk6IHN0cmluZ3tcbiAgICAgICAgcmV0dXJuIGBoZWxsbyAke3RoaXMubWVzc2FnZX1gO1xuICAgIH1cbn0iXX0=