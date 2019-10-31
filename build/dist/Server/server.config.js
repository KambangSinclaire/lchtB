"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ServerConfiguration = /** @class */ (function () {
    function ServerConfiguration(app) {
        this.port = process.env.PORT || 9000;
        this.app = app;
    }
    ServerConfiguration.prototype.setUpServer = function () {
        var _this = this;
        this.app.listen(this.port, function () {
            console.log("Server started on port " + _this.port);
        });
    };
    return ServerConfiguration;
}());
exports.ServerConfiguration = ServerConfiguration;
//# sourceMappingURL=server.config.js.map