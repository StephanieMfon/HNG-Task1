import { Request, Response } from "express";
import moment from "moment";
import { dayNames, getDay } from "../utils/data";

export default class AppController {
	/**
	 * handlEndpoint - Controller that returns an object containing App's details
	 * @param req - Request Object
	 * @param res - Response Object
	 * @returns: Returns a json object with specified details
	 */
	static async handelEndpoint(
		req: Request<{ slack_name: "string"; track: "string" }>,
		res: Response
	) {
		try {
			const utc_time = moment.utc().format();
			return res.status(200).json({
				slack_name: req.query.slack_name,
				current_day: dayNames[getDay],
				utc_time: utc_time,
				track: req.query.track,
				github_file_url:
					"https://github.com/StephanieMfon/HNG-Task1/blob/main/src/app.ts",
				github_repo_url: "https://github.com/StephanieMfon/HNG-Task1",
				status: "success",
			});
		} catch (e) {
			return res.status(400).json({
				status: "failure",
				message: "An error occured.",
			});
		}
	}
}
